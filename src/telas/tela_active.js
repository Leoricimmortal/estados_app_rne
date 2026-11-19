// Realizado por Ricardo Castro de Matos

import TelaEstado from '../components/TelaEstado';

export default function TelaActive({ estadoReal, temFoco, onVoltar }) {
  return (
    <TelaEstado
      titulo="ACTIVE"
      descricao="Aplicativo em primeiro plano e interativo."
      cor="#2E7D32"
      estado="ACTIVE"
      estadoReal={estadoReal}
      temFoco={temFoco}
      onVoltar={onVoltar}
    />
  );
}
