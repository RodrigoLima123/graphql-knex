const express = require('express')
const graphqlHTTP = require('express-graphql')  // Sempre que eu tiver importando alguma dependencia de module.exports eu coloco diretamente o nome do arquivo (o nome da dependencia) //
const { buildSchema } = require('graphql')
const schema = require('./api/schema')   // Sempre que eu tiver importando algo da minha aplicação eu uso caminho relativo //

const app = express()
app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, () => console.log('Executando...'))