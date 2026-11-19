# 📱 Estados do Ciclo de Vida — React Native com Expo

Aplicativo didático que demonstra os **estados do ciclo de vida de um aplicativo mobile** (Active, Inactive, Hidden e Paused) usando React Native, Expo e Expo Router.

Além de apresentar cada estado em uma tela própria, o app monitora em tempo real o **estado real** do aplicativo pela API `AppState` do React Native e mostra se o app está **com foco** ou **sem foco**. Por exemplo, ao puxar a barra de notificações ou mandar o app para segundo plano.

> Realizado por **Ricardo Castro de Matos**

---

## ✨ Funcionalidades

- **Tela inicial** com quatro botões coloridos, um para cada estado do ciclo de vida.
- **Telas de demonstração** para cada estado, com título, descrição e cor própria.
- **Monitoramento em tempo real** do `AppState` (`active`, `inactive`, `background`).
- **Indicador de foco**: mostra `COM FOCO` (verde) ou `SEM FOCO` (vermelho) conforme o app ganha ou perde foco.
- **Logs no console** de cada mudança de estado, para acompanhar o ciclo de vida durante o desenvolvimento.
- **Botão de voltar** circular em todas as telas de estado.

## 🎨 Estados demonstrados

| Estado | Cor | Descrição |
|---|---|---|
| **ACTIVE** | 🟢 `#2E7D32` | Aplicativo em primeiro plano e interativo. |
| **INACTIVE** | 🟠 `#FFA726` | Aplicativo sem foco de interação. |
| **HIDDEN** | 🟣 `#6A1B9A` | Interface do aplicativo está oculta. |
| **PAUSED** | 🔴 `#C62828` | Aplicativo em segundo plano, sem atualização normal da interface. |

> **Observação:** a API `AppState` do React Native só informa os valores `active`, `inactive` (apenas iOS) e `background`. Os estados *Hidden* e *Paused* são conceituais e aparecem como telas explicativas. O campo **"Estado real do AppState"** sempre mostra o valor verdadeiro informado pelo sistema.

## 🛠️ Tecnologias

- [Expo](https://expo.dev) SDK 58
- [React Native](https://reactnative.dev) 0.88
- [React](https://react.dev) 19
- [Expo Router](https://docs.expo.dev/router/introduction) (roteamento baseado em arquivos)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- TypeScript + JavaScript

## 📂 Estrutura do projeto

```
src/
├── app/
│   ├── _layout.tsx        # Layout raiz (Stack sem cabeçalho)
│   └── index.tsx          # Tela inicial + monitoramento do AppState e navegação
├── components/
│   └── TelaEstado.js      # Componente reutilizável que exibe um estado
└── telas/
    ├── tela_active.js     # Tela do estado ACTIVE
    ├── tela_inactive.js   # Tela do estado INACTIVE
    ├── tela_hidden.js     # Tela do estado HIDDEN
    └── tela_paused.js     # Tela do estado PAUSED
```

### Como funciona

1. `index.tsx` registra um listener com `AppState.addEventListener('change', ...)` ao montar a tela.
2. A cada mudança, o app atualiza `estadoReal` e `temFoco` (perde o foco em `inactive`/`background` e recupera em `active`).
3. Ao tocar em um botão, a tela do estado escolhido é exibida e recebe `estadoReal`, `temFoco` e `onVoltar` por props.
4. Cada tela em `src/telas/` apenas configura o componente `TelaEstado` com título, descrição e cor.

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org) (versão LTS)
- Um emulador Android ou simulador iOS, **ou** um celular com o app [Expo Go](https://expo.dev/go)

### Passos

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npx expo start
```

Depois, no terminal do Expo:

- pressione **`a`** para abrir no emulador Android;
- pressione **`i`** para abrir no simulador iOS;
- pressione **`w`** para abrir no navegador;
- ou escaneie o QR Code com o **Expo Go** no celular.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor do Expo |
| `npm run android` | Inicia e abre no Android |
| `npm run ios` | Inicia e abre no iOS |
| `npm run web` | Inicia e abre no navegador |
| `npm run lint` | Executa o ESLint |

## 🧪 Testando os estados

Com o app aberto em um dispositivo ou emulador:

- **Puxe a barra de notificações**: o indicador muda para `SEM FOCO`.
- **Vá para a tela inicial do sistema** (botão Home): o estado real muda para `background`.
- **Volte ao app**: o estado retorna para `active` e o indicador volta para `COM FOCO`.

Acompanhe os logs (`EVENTO CHANGE`, `Aplicativo perdeu o foco` etc.) no terminal do Expo.

## 📄 Licença

Projeto baseado no template do `create-expo-app`, distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE).
