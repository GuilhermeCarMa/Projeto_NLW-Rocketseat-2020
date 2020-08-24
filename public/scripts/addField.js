document.querySelector("#add-time") // Procurar o botão
.addEventListener('click', cloneField) // Quando clicar no botao, executa uma ação || onde tem 2 argumento, sendo assim, o 1° o tipo evento e o 2° o que irá acontecer

function cloneField() {
   // console.log("Cheguei aqui") // Aparece no console no browser a mensagem

   // Duplicar os campos -- Que campos?
   const newFieldContainer= document.querySelector('.schedule-item').cloneNode(true) // Duplicação do elemento

   // Pegar os campos -- Que campos?
    const fields = newFieldContainer.querySelectorAll('input') // Ele vai pegar tudo que for input e coloca no fields

    // Colocar na página -- Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer) // appendChild = colocar um novo filho

    // Para cada campo, limpar
    fields.forEach(function(fieldDoMomento) {
        // Pegar o field do momento e limpa ele
        fieldDoMomento.value = ""
    })
}