 -- GraphQL ----


 - Resolvers:
 São Funções, essas funções do GraphQL vão dizer para ele como obter os dados
Por exemplo:
- Para obter o dado, pode ser simplesmente pegar um objeto que vc já recebeu no resolver e acessar um atributo, 
que nesse caso vc não precisaria criar um resolver pra isso que automoticamente o GraphQL já resolve.

- Para obter determinado dado vc pode precisar consultar uma API um banco de dados;



Conceito de GraphQL:

- Na verdade o GraphQL é um API, que server tanto pra consultar dados (consumindo dados), a partir das Querys;
- Ou vc pode alterar os dados a partir das Mutations;

Arquitetura:

GraphQL: Na verdade é um grande grafo, vc tem um pontos de entrada que é a raiz desse grafos,
e se tem pontos e essas ligações entre esses pontos a partir da função Resolver.

- Exemplo:

Você tem um usuário que é um ponto do seu grafo, e esse usuario tem um atributo chamado pagamentos e 
esse pagamentos é uma nova tabela no banco de dados, significa que dentro do seu usuario vai ter um Resolver, uma função que vai resolver como apartir de um determinado usuario obtem os pagamentos dele,
provavelmente a partir do ID do usuario você vai na tabela de pagamentos e obtem os pagamentos, dentro de pagamentos tem a informação de cartão de crédito, então é um novo nó no seu grafo.
Então a partir de pagamentos como é que consigo obter informações do cartão de crédito que ta no banco de dados, então existe um Resolver dentro de pagamentos para obter lá, dessa forma vc vai navegando entre os dados, apartir do nó raiz vc pode ter varios caminhos várias Querys e Mutations, então vc vai obtendo a partir desse grafo obeter informações do banco de dados.


Imagine seu dados como um grande grafo ligados, que são seus dados e apartir desses pontos vc pode chegar em entros pontos.








Conceito API REST:
- Tem o padrão de métodos HTTP.
- Se encaixa muito bem no padrão de CRUD de cadastro, da sigla (Create , Ready, Update e Delete).





API GRAPHQL:


Query

{
  getUsers{
    id
    name
    email
    password
  }
}


mutation {
  createUser(input:{
    name:"Rodrigo"
    email:"rodrigo@teste.com"
    password: "123412"
  }) {
    id
  }
}