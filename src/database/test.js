const database = require('./db') // ./ = pasta do local = src/database

// Importanto o createProffy.js
const createProffy = require('./createProffy')

database.then(async (db) => { // o db do parametro é o db que o .then esta dando
    // Inserir dados
    proffyValue = {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "89999999", 
        bio: "Entusiasta das melhores tecnologias de química avançada.  Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: 1, 
        cost: "20"
        // O proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220 
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220 
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

        // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys, classes, class_schedule WHERE proffys.id = classes.proffy_id AND classes.id = class_schedule.class_id;") 
    //console.log(selectedProffys)

    // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // O horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // O time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)
})






// COMENTÁRIOS
// SELECT * FROM proffys, classes, class_schedule WHERE proffys.id = classes.proffy_id AND classes.id = class_schedule.class_id;
// Pode ser feito assim
// SELECT proffys.*, classes.* FROM proffys JOIN classes ON (classes.proffy_id = proffys_id) WHERE classes.proffy_id = 1