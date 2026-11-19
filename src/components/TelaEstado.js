// Realizado por Ricardo Castro de Matos

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TelaEstado({
  titulo,
  descricao,
  cor,
  estado,
  estadoReal,
  temFoco,
  onVoltar,
}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Botão circular de retorno */}
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={onVoltar}
        activeOpacity={0.7}
      >
        <Text style={styles.setaVoltar}>
          ‹
        </Text>
      </TouchableOpacity>

      <View style={styles.conteudo}>
        <Text style={styles.icone}>
          📱
        </Text>

        <Text style={styles.cabecalho}>
          ESTADOS DO CICLO DE VIDA
        </Text>

        {/* Cartão do estado selecionado */}
        <View
          style={[
            styles.cartao,
            { backgroundColor: cor },
          ]}
        >
          <Text style={styles.titulo}>
            {titulo}
          </Text>

          <Text style={styles.descricao}>
            {descricao}
          </Text>
        </View>

        {/* Informações dos estados */}
        <View style={styles.informacoes}>
          <Text style={styles.label}>
            Estado demonstrado:
          </Text>

          <Text style={styles.valor}>
            {estado}
          </Text>

          <Text style={styles.label}>
            Estado real do AppState:
          </Text>

          <Text style={styles.valor}>
            {estadoReal ?? 'Indisponível'}
          </Text>

          <Text style={styles.label}>
            Foco do aplicativo:
          </Text>

          <Text
            style={[
              styles.valor,
              {
                color: temFoco ? '#2E7D32' : '#C62828',
              },
            ]}
          >
            {temFoco ? 'COM FOCO' : 'SEM FOCO'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FC',
  },

  // Círculo cinza no canto superior esquerdo
  botaoVoltar: {
    position: 'absolute',
    top: 35,
    left: 15,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#BDBDBD',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    zIndex: 10,
  },

  // Seta branca
  setaVoltar: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
  },

  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  icone: {
    fontSize: 55,
    marginBottom: 15,
  },

  cabecalho: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 35,
    textAlign: 'center',
  },

  cartao: {
    width: '100%',
    minHeight: 110,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    elevation: 4,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },

  descricao: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  informacoes: {
    marginTop: 30,
    alignItems: 'center',
  },

  label: {
    fontSize: 14,
    color: '#555555',
    marginTop: 12,
  },

  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 5,
  },
});
