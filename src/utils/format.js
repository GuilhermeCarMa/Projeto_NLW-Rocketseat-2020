const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 //+ antes do subjectNumber = forçando que é número
    return subjects[position]
}

function convertHoursToMinute(time) {
    const [hour, minutes] = time.split(':') //Separa por ':' em array
    return Number((hour * 60) + minutes) // Forçar a formatação em números
}



module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinute
}