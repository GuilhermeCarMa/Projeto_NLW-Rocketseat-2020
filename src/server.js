const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// ------------------------------------------ SERVIDOR -----------------------------------------------------------------------
// CRIAÇÃO DE SERVIDOR - PARA RODAR SERV: node src/server.js || npm run dev
// Pegar uma dependência do meu projeto - express é uma função
const express = require('express')
const server = express()

// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
}) // 1° Arg = Onde estão meus .html | 2° Arg = enviar objetos com algumas opções


// ------------------------------------------ INÍCIO E CONFIGURAÇÃO DO SERVIDOR -----------------------------------------------
server
// Receber os dados do req.body
.use(express.urlencoded({ extended: true }))

//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) //.use = configuração do servidor
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// ------------------------------------------ START DO SERVIDOR ---------------------------------------------------------------
.listen(5500) // 5500 = porta



// ------------------------------------------ COMENTÁRIOS --------------------------------------------------------------------
//.get("/", (req, res) => { //Quando o express rodar, ele vai passar a requisição e a resposta para a function
//    return res.sendFile(__dirname + "/views/index.html") //__dirname = /c/NLW/
//}) 1° Argumento = Pedido do site, então eu dei. 2° Argumento = o que ele deve devolve ||| () => {} = função, só que reduzida