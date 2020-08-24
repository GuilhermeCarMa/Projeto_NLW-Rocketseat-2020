// Importando a dependencia
const Database = require('sqlite-async')
// Abrir o banco de dados || "/database.sqlite" = diretorio.sqlite
module.exports = Database.open(__dirname + "/database.sqlite")
// .then() = fazer algo que quero, passando como argumento um banco de dados
.then(execute)

// Exportar o bando de dados - 1° return antes do db.exec, para ele retornar para o .then (linha 6)
//module.exports (linha 4)

// FUNÇÃO
function execute(db) {
    // Criar as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `) // Rodar código sql e colocar entre crase `
}