# CompassVideos

## Descrição
Compass.uol é uma aplicação web inovadora que oferece aos usuários a oportunidade de assistir a uma vasta seleção de filmes e séries a qualquer hora e em qualquer lugar. Com uma interface intuitiva, os usuários podem facilmente navegar por uma ampla variedade de opções e adicionar seus títulos favoritos à sua lista pessoal. Além disso, o Compass.uol permite criar listas de favoritos, proporcionando uma experiência personalizada e acessível para todos os amantes de cinema e televisão.

## Índice
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos do Sistema](#requisitos-do-sistema)
- [Instalação](#instalação)
- [Configuração Inicial](#configuração-inicial)
- [Autores](#autores)
- [Agradecimentos](#agradecimentos)

## Tecnologias Utilizadas
- HTML
- Tailwind.css
- Typescript
- React

## Requisitos do Sistema
typescript### Cliente (Frontend)
- **Navegador Web:** Google Chrome, Mozilla Firefox, Safari, ou Microsoft Edge (versões recentes)
- **Conexão à Internet:** Banda larga recomendada para streaming de vídeo em alta definição

### Ferramentas de Desenvolvimento
- **IDE/Editor de Código:** Visual Studio Code, Sublime Text, ou outro editor
- **Git:** Para controle de versão
- **Node Package Manager (npm):** Para gerenciar dependências do Node.js

## Instalação e Uso
# Clone o repositório e Inicie a pagina
git clone https://github.com/MurilloLeoni/Desafio-Semana-8.git
abre oq o GitHub baixou e no console digita "npm install" pra baixar as dependencias
E depois um npm run dev pra iniciar

Acesse a aplicação em http://localhost:5173/home no seu navegador.

## Autores

Karllos Daniel Ribeiro - Desenvolvedores Principais - [Perfil Git](https://github.com/karllosDR)
Murillo Sousa Moreira - Desenvolvedores Principais - [Perfil Git](https://github.com/murillosm)
Murillo Leoni - Desenvolvedores Principais - [Perfil Git](https://github.com/MurilloLeoni)
weuller luduvico meireles souza - Desenvolvedores Principais - [Perfil Git](https://github.com/weu-souza)

## Agradecimentos

Agradecimentos especiais a todos os colaboradores e aos desenvolvedores das bibliotecas e ferramentas utilizadas neste projeto. Um agradecimento especial ao Diego Breskovit por sua ajuda na correção da parte do Player.

##

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
