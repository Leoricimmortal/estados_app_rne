// Realizado por Ricardo Castro de Matos

import TelaEstado from '../components/TelaEstado';

export default function TelaInactive({ estadoReal, temFoco, onVoltar }) {
  return (
    <TelaEstado
      titulo="INACTIVE"
      descricao="Aplicativo sem foco de interação."
      cor="#FFA726"
      estado="INACTIVE"
      estadoReal={estadoReal}
      temFoco={temFoco}
      onVoltar={onVoltar}
    />
  );
}
