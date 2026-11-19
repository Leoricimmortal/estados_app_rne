// Realizado por Ricardo Castro de Matos

import TelaEstado from '../components/TelaEstado';

export default function TelaPaused({ estadoReal, temFoco, onVoltar }) {
  return (
    <TelaEstado
      titulo="PAUSED"
      descricao="Aplicativo em segundo plano, sem atualização normal da interface."
      cor="#C62828"
      estado="PAUSED"
      estadoReal={estadoReal}
      temFoco={temFoco}
      onVoltar={onVoltar}
    />
  );
}
