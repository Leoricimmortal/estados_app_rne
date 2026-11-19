// Realizado por Ricardo Castro de Matos

import TelaEstado from '../components/TelaEstado';

export default function TelaHidden({ estadoReal, temFoco, onVoltar }) {
  return (
    <TelaEstado
      titulo="HIDDEN"
      descricao="Interface do aplicativo está oculta."
      cor="#6A1B9A"
      estado="HIDDEN"
      estadoReal={estadoReal}
      temFoco={temFoco}
      onVoltar={onVoltar}
    />
  );
}
