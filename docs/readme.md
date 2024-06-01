# Blog

### Features

-   BLOG
    -   Listar posts do blog.
    -   Listar um único post por Id.
    -   Adicionar post ao blog.
    -   Deletar um post por ID.
    -   Filtrar post por TAGS.
    -   Filtrar por Título.
    -   Adicionar um comentário.
    -   Excluir um comentário.

Interface da Postagem:

```js
[
    {
        id: 1,
        title: "O que é Typescript",
        author: "Anders Hejlsberg",
        description:
            "TypeScript é uma linguagem de programação fortemente tipada baseada em JavaScript, oferecendo melhores ferramentas em qualquer escala.",
        text: "Aplique tipos ao seu projeto JavaScript de forma incremental, cada etapa melhora o suporte do editor e melhora sua base de código.Vamos pegar esse código JavaScript incorreto e ver como o TypeScript pode detectar erros em seu editor .",
        tags: ["desenvolvimento", "javascript"],
        comments: [
            {
                name: "Carlos",
                comment: "Muito bom!",
            },
            {
                name: "Andreia",
                comment: "Foi bem esclarecedor!",
            },
        ],
    },
    {
        id: 2,
        title: "O que é o ExpressJS",
        author: "TJ Holowaychuk",
        description:
            "O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móveis.",
        text: "Escrito em JavaScript, o Express.js é utilizado por diversas empresas ao redor do mundo, dentre elas a Fox Sports, PayPal, IBM, Uber, entre outras.Muito popular tanto em grandes empresas quanto na comunidade, o Express facilita a criação de aplicações utilizando o Node em conjunto com o JavaScript, tornando este ecossistema ainda mais poderoso.",
        tags: ["desenvolvimento", "javascript", "nodejs"],
        comments: [
            {
                name: "Carlos",
                comment: "Muito bom!",
            },
            {
                name: "Andreia",
                comment: "Foi bem esclarecedor!",
            },
        ],
    },
];
```
