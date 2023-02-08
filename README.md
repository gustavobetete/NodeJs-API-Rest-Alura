## Projeto feito junto com as aulas da Alura no curso "Node.Js API REST com Express e MongoDB"

> Para iniciar o projeto foi utilizado a lib **nodemon** que reinicia automaticamente o aplicativo quando alterações de arquivos são detectadas.

> Foi adicionada um script no arquivo package.json '"dev": "nodemon server.js"' para rodar o nodemon.

*Command*: _npm run dev_

### Utilizando o mongoDB Atlas

> Foi utlizado a lib **mongoose** que fornece uma solução direta e baseada em esquema para modelar os dados de seu aplicativo. Ele inclui conversão de tipos integrados, validação, criação de consultas, ganchos de lógica de negócios e muito mais, prontos para uso.

### Rotas ✅

>Livros:

- **POST:** ("/livros");
- **GET:** ("/livros");
- **GET by editora:** ("/livros/busca");
- **GET By ID:** ("/livros/:id");
- **PUT:** ("/livros/:id");
- **DELETE:** ("/livros/:id");

>Autores:

- **POST:** ("/autores");
- **GET:** ("/autores");
- **GET By ID:** ("/autores/:id");
- **PUT:** ("/autores/:id");
- **DELETE:** ("/autores/:id");