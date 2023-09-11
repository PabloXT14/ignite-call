<h1 align="center">
  <img
    src=".github/assets/logo-ignite.svg"
    title="Logo Ignite Rocketseat"
    alt="Logo Ignite Rocketseat"
    width="30px"
  />
  Ignite Call
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pabloxt14/ignite-call">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pabloxt14/ignite-call">
  
  <a href="https://github.com/pabloxt14/ignite-call/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pabloxt14/ignite-call">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/pabloxt14/ignite-call/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pabloxt14/ignite-call?style=social">
  </a>
</p>

<p>
  <img src=".github/assets/cover.png" alt="" />
</p>

<h4 align="center"> 
	🚀 Aplicação finalizada 🚀
</h4>

<p align="center">
 <a href="#-about">About</a> |
 <a href="#-deploy">Deploy</a> |
 <a href="#-layout">Layout</a> | 
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
 <a href="#-author">Author</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

Neste projeto, construímos um Design System em formato de `monorepo`, documentando `tokens` (cores, tamanhos de fonte, espaçamento, etc.) e `componentes` React com a ferramenta `Storybook`. Utilizamos o `turbo-repo` para automatizar o processo de build dos pacotes, garantindo eficiência e escalabilidade. Com o `changeset`, facilitamos a atualização e publicação dos pacotes no `npm`, mantendo um histórico claro das alterações. Essa abordagem promove reutilização, padronização e colaboração entre diferentes projetos.

Vale ressaltar que este projeto foi desenvolvido como conclusão de um desafio proposto no curso/trilha **Ignite** oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

---

## 🔗 Deploy

O deploy da aplicação pode ser acessada através da seguinte URL base: https://pabloxt14-ignite-call.vercel.app/

---

## 🎨 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1161274296921389678). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

Veja uma demonstração visual das principais telas da aplicação:

### Landing

<p align="center">
  <img
    src=".github/assets/landing-page.png"
    alt="Landing Page Demonstration"
    title="Landing Page Demonstration"
    width="100%"
  />
</p>

### Registration

<p align="center">
  <img
    src=".github/assets/registration-page-01.png"
    alt="Registration Page Demonstration 01"
    title="Registration Page Demonstration 01"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/registration-page-02.png"
    alt="Registration Page Demonstration 02"
    title="Registration Page Demonstration 02"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/registration-page-03.png"
    alt="Registration Page Demonstration 03"
    title="Registration Page Demonstration 03"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/registration-page-04.png"
    alt="Registration Page Demonstration 04"
    title="Registration Page Demonstration 04"
    width="100%"
  />
</p>

### Calendar

<p align="center">
  <img
    src=".github/assets/calendar-page-01.png"
    alt="Calendar Page Demonstration 01"
    title="Calendar Page Demonstration 01"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/calendar-page-02.png"
    alt="Calendar Page Demonstration 02"
    title="Calendar Page Demonstration 02"
    width="100%"
  />
</p>

<p align="center">
  <img
    src=".github/assets/calendar-page-03.png"
    alt="Calendar Page Demonstration 03"
    title="Calendar Page Demonstration 03"
    width="100%"
  />
</p>

---

## 🚀 How it works

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)
* Para o banco de dados ter o [MySQL](https://www.mysql.com/) ou [Docker](https://www.docker.com/) para baixar a imagem do banco.

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Clonando e Executando

Passo a passo para clonar e executar a aplicação na sua máquina:

```bash
# Clone este repositório
$ git clone git@github.com:pabloxt14/ignite-call.git

# Acesse a pasta do projeto no terminal
$ cd ignite-call

# Instale as dependências
$ npm install

# Crie uma arquivo .env e preencha conforme apresentado no arquivo .env.example

# Executar seu banco de dados

# Executar o seguinte comando para criar as migrations no banco
$ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação inciará em alguma porta disponível que poderá ser acessada pelo navegador
```

---

## 🛠 Technologies

As seguintes principais ferramentas foram usadas na construção do projeto:

- **[typeScript](https://www.typescriptlang.org/)**
- **[next.js](https://nextjs.org/)**
- **[@ignite-ui/react](https://www.npmjs.com/package/@ignite-ui/react)**
- **[prisma](https://www.prisma.io/)**
- **[react-hook-form](https://react-hook-form.com/)**
- **[zod](https://zod.dev/)**
- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)**
- **[phosphor-icons](https://phosphoricons.com/)**
- **[@tanstack/react-query](https://tanstack.com/query/latest)**
- **[axios](https://axios-http.com/ptbr/docs/intro)**
- **[cookies-next](https://www.npmjs.com/package/cookies-next)**
- **[next-auth](https://next-auth.js.org/)**
- **[next-seo](https://github.com/garmeeh/next-seo)**
- **[dayjs](https://day.js.org/)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo [package.json](./package.json)

---

## ✍ Author

<img alt="Perfil Github" title="Perfil Github" src="https://github.com/PabloXT14.png" width="100px" />

[![Linkedin Badge](https://img.shields.io/badge/-Pablo_Alan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/pabloalan/)](https://www.linkedin.com/in/pabloalan/)

[![Gmail Badge](https://img.shields.io/badge/-pabloxt14@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:pabloxt14@gmail.com)](mailto:pabloxt14@gmail.com)

---

## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

Feito com 💜 por Pablo Alan 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pabloalan/)
