// Realizado por Ricardo Castro de Matos

import { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AppState,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TelaActive from '../telas/tela_active';
import TelaInactive from '../telas/tela_inactive';
import TelaHidden from '../telas/tela_hidden';
import TelaPaused from '../telas/tela_paused';

type Tela = 'home' | 'active' | 'inactive' | 'hidden' | 'paused';

export default function Index() {
  const [telaAtual, setTelaAtual] = useState<Tela>('home');

  // Estado real do aplicativo
  const [estadoReal, setEstadoReal] = useState(
    AppState.currentState
  );

  // Controle de foco do aplicativo
  const [temFoco, setTemFoco] = useState(
    AppState.currentState === 'active'
  );

  // Monitoramento do ciclo de vida
  useEffect(() => {
    console.log('================================');
    console.log('MONITORAMENTO INICIADO');
    console.log('Estado inicial:', AppState.currentState);
    console.log('================================');

    // Mudança de estado do aplicativo
    // (inclui barra de notificações e segundo plano)
    const estadoSubscription = AppState.addEventListener(
      'change',
      (proximoEstado) => {
        console.log('EVENTO CHANGE:', proximoEstado);

        setEstadoReal(proximoEstado);

        // Quando o app perde o foco
        // (ex: puxar a barra de notificações)
        if (
          proximoEstado === 'inactive' ||
          proximoEstado === 'background'
        ) {
          console.log('Aplicativo perdeu o foco');
          setTemFoco(false);
        }

        // Quando o app recupera o foco
        // (ex: fechar a barra de notificações)
        else if (proximoEstado === 'active') {
          console.log('Aplicativo recuperou o foco');
          setTemFoco(true);
        }
      }
    );

    return () => {
      estadoSubscription.remove();
      console.log('MONITORAMENTO FINALIZADO');
    };
  }, []);

  // Navegação
  const abrirTela = (tela: Tela) => {
    setTelaAtual(tela);
  };

  const voltarHome = () => {
    setTelaAtual('home');
  };

  // Propriedades compartilhadas
  const propriedadesTela = {
    estadoReal,
    temFoco,
    onVoltar: voltarHome,
  };

  // Telas de demonstração
  if (telaAtual === 'active') {
    return <TelaActive {...propriedadesTela} />;
  }

  if (telaAtual === 'inactive') {
    return <TelaInactive {...propriedadesTela} />;
  }

  if (telaAtual === 'hidden') {
    return <TelaHidden {...propriedadesTela} />;
  }

  if (telaAtual === 'paused') {
    return <TelaPaused {...propriedadesTela} />;
  }

  // Tela principal
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudo}>
        {/* Ícone do aplicativo */}
        <Text style={styles.icone}>
          📱
        </Text>

        {/* Cabeçalho */}
        <Text style={styles.titulo}>
          ESTADOS DO CICLO DE VIDA
        </Text>

        <Text style={styles.subtitulo}>
          REACT NATIVE COM EXPO
        </Text>

        <Text style={styles.instrucao}>
          Selecione um estado para visualizar:
        </Text>

        {/* ACTIVE */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.botao, styles.active]}
          onPress={() => abrirTela('active')}
        >
          <Text style={styles.textoTitulo}>
            Em execução (ACTIVE)
          </Text>

          <Text style={styles.textoDescricao}>
            Aplicativo em primeiro plano e interativo.
          </Text>
        </TouchableOpacity>

        {/* INACTIVE */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.botao, styles.inactive]}
          onPress={() => abrirTela('inactive')}
        >
          <Text style={styles.textoTitulo}>
            Inativo (INACTIVE)
          </Text>

          <Text style={styles.textoDescricao}>
            Aplicativo sem foco de interação.
          </Text>
        </TouchableOpacity>

        {/* HIDDEN */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.botao, styles.hidden]}
          onPress={() => abrirTela('hidden')}
        >
          <Text style={styles.textoTitulo}>
            Oculto (HIDDEN)
          </Text>

          <Text style={styles.textoDescricao}>
            Interface do aplicativo está oculta.
          </Text>
        </TouchableOpacity>

        {/* PAUSED */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.botao, styles.paused]}
          onPress={() => abrirTela('paused')}
        >
          <Text style={styles.textoTitulo}>
            Pausado (PAUSED)
          </Text>

          <Text style={styles.textoDescricao}>
            Aplicativo em segundo plano, sem atualização normal da interface.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FC',
  },

  conteudo: {
    flex: 1,
    justifyContent: 'flex-start', // Joga tudo para cima
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40, // Controla a distância do topo
  },

  icone: {
    fontSize: 150, // Aumentado
    marginBottom: 15, // Espaçamento abaixo do ícone
  },

  titulo: {
    fontSize: 22, // Aumentado
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitulo: {
    fontSize: 18, // Aumentado
    color: '#888888',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },

  instrucao: {
    fontSize: 16, // Aumentado
    color: '#777777',
    textAlign: 'center',
    marginBottom: 30, // Espaço entre o cabeçalho e os botões
  },

  botao: {
    width: '100%',
    minHeight: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3,
  },

  active: {
    backgroundColor: '#2E7D32',
  },

  inactive: {
    backgroundColor: '#FFA726',
  },

  hidden: {
    backgroundColor: '#6A1B9A',
  },

  paused: {
    backgroundColor: '#C62828',
    marginBottom: 0,
  },

  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 20, // Aumentado
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },

  textoDescricao: {
    color: '#FFFFFF',
    fontSize: 14, // Aumentado
    fontWeight: '500',
    textAlign: 'center',
  },
});
