module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) { // PARA USAR AWAIT, É NECESSÁRIO A PALAVRA async ANTES DA FUNCTION
    // Inserir dados na table de proffys
        // db faça ('') e se conseguir, rode o .then()
        //db.run('').then() = promessa ||||||||| await = espere uma promessa ser cumprida, não precisando mais do .then()
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    const proffy_id = insertedProffy.lastID // Ultimo ID inserido

    // Inserir dados na table de class
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)
    const class_id = insertedClass.lastID

    // Inserir dados na table de class_schedule
    const insertAllClassSchedulesValues = classScheduleValues.map((classScheduleValue) => { //.map = mapear o array classScheduleValues do test.js
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    // Aqui vou executar os db.run() das class_schedules
    await Promise.all(insertAllClassSchedulesValues) // Pegando cada promessa do array de classSchedules
}