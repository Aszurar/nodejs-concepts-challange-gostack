# Desafio de Conceitos de Nodejs | GoStack

- Nesse desafio, criamos uma aplicação para treinar os conceitos iniciais de NodeJS como rotas, middlewares, servidores, etc.
- O Node é uma plataforma open-source que permite a execução da lingaugem javascript no lado do servidor/back-end.
  - Composto por:
  - v8: Interpretador de JavaScript, criado pela Google para executar o Chrome, tornando-o muito mais rápido e eficiente e que permite a execução de código javascript no back-end.
  - libuv: Biblioteca multiplataforma com o foco em I/O assíncrono melhorando ainda mais o desempenho do Node.
    - Também pode ser utildo por outras linguagens.
  - Com o objetivo de Melhorar o suporte ao processo de I/O das tecnologias de back-end.

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#art-documentação">Documentação</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-principais-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
</h3>

___

<div align="center" >
  <img src="https://i.imgur.com/kxsPDgP.gif" width="400">____<img src="https://i.imgur.com/UMzuf3e.gif" width="400">
</div>
<div align="center" >
  <img src="https://i.imgur.com/30uVpAv.gif" width="400">____<img src="https://i.imgur.com/qR16XKE.gif" width="400">
</div>


- [**Link do vídeo completo sobre o projeto**](https://www.youtube.com/watch?v=4hPehnLnzAU)
___

## :information_source: Sobre

- Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir: 
  1. a criação, 
  2. listagem, 
  3. atualização 
  4. Remoção dos repositórios
- Além disso.  permitirá que os repositórios possam receber "likes".
 
- Estrutura  
  1. Código:
     - É tentando **manter o padrão que é ensinado na Rocketseat** para o código mais limpo, organizado de facil entendimento com sua estrutura de pastas também.
       - Todo código foi **feito com JavaScript**.
  2. Express:
       - Toda criação, inicialização e funcionalidades do projeto foi feito usando o express.
  3. NodeJS
       - Foi cronstruído de forma simples uma aplicação para resgatar os conceitos de Node em conjunto com de uma API Rest.
       - Foi usado o yarn como gerenciador de pacotes.
* **Arquivo principal**:

<div align="center" >
    <img src="https://i.imgur.com/E6D9p1S.png" width="800">
</div>

___

## :interrobang: Motivo

Com esse projeto foi posto em prática de vários conceitos iniciais de NodeJS, como: 
  1. O uso do framework express:
     - Iniciação da aplicação/serivdor.
     - Auxilia na criação de rotas os métodos http: post, get, patch, put e delete.
  3. Configuração e iniciação do Package.json
  4. Prática no uso dos HTTP Codes e HTTP Methods
  5. Estrutura inicial de um servidor simples com express.
     - Uso de Json no express
     - Recarregando automaticamente o servidor quando houver alterações no código.
     - Esturtura incial de pastas
  6. Transferência de dados entre a requisição/rotas:
     - Uso dos parâmetros de rotas: params e query. 
     - Uso do parâmetro de Headers
     - Uso do Request Body
  7. Uso do Insomnia
  8. Entedimento básico sobre Regras de negócio
     -  Prática de lógica de programação
     -  Prática e uso de métodos padrões javascript como: 
        -  find()
        -  some()
        -  filter()
        -  reduce()
        -  indexOf()
        -  splice()  
  9. Geração de ids com o uuid
  10. Criação e uso de Middlewares
     - Uso do método next()
     - Entendimento mais profundo sobre Request e Response

 **Funcionalidades**

  0. Middleware: validadeId
      - Verifica se o id passado é válido.
    <img src="https://i.imgur.com/sO9QbT1.png" width="800">
   

  1. POST /repositories: 
      - A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.
    <img src="https://i.imgur.com/x857IHm.png" width="800">
 

  2. GET /repositories: 
       - Rota que lista todos os repositórios;
    <img src="https://i.imgur.com/ksol16F.png" width="800">

 
  3. PUT /repositories/:id: 
       - A rota que altera apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;
    <img src="https://i.imgur.com/vfCLWNz.png" width="800">

  4. DELETE /repositories/:id: 
      - A rota que deleta o repositório com o id presente nos parâmetros da rota;
    <img src="https://i.imgur.com/4VXma7n.png" width="800">
  5. POST /repositories/:id/like: 
      - A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;
    <img src="https://i.imgur.com/lac9QgZ.png" width="800">
___
## :art: Documentação

- Após executar a aplicação basta acessar o endereço: 
  <a href="http://localhost:3333/api-docs/" target="_blank">http://localhost:3333/api-docs/</a>

[<h2 align="center">Nodejs Concepts Challange - Swagger</h2>](http://localhost:3333/api-docs/)
<img src="https://i.imgur.com/hcgdd64.png" width="900">

___
## :seedling: Requisitos Mínimos

- NodeJS
- Express
- Yarn(ou NPM)
___

## :rocket: Principais Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias
- [Express](https://expressjs.com/pt-br/)
- [Insomnia](https://insomnia.rest/download)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)
___
## :package: Como baixar e executar o projeto

  - Clonar o projeto:
    ```bash
     https://github.com/Aszurar/nodejs-concepts-challange-gostack.git
    ```
  - É necessário a instalação do **yarn** de acordo com seu sistema operacional, para isso veja como no site do [Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)
  - Instalação das dependências:
    - Execute o comando abaixo dentro da pasta do projeto
    ```bash
      yarn
    ```
 - Execução -
    ```bash
       yarn dev
    ```
- Agora é necessário o uso do Insomnia para que teste cada requisição:
    1. Baixe e Instale o [Insomnia](https://insomnia.rest/download):
    2. Importe no Insomnia o arquivo chamado teste-no-insomnia que está na pasta do projeto.
    3. Agora basta executar cada rota no Insomnia para testar o projeto
___
Desenvolvido por :star2: Lucas de Lima Martins de Souza.
