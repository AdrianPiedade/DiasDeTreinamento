const nome = "Adrian"

function getEventoAleatorio(){
    let random_number = Math.floor(Math.random() * 3)
    let event_type = ""
    if(random_number === 0) {
        event_type = "Maratona"
    } else if(random_number === 1) {
        event_type = "Triathlon"
    } else {
        event_type = "Pentathlon"
    }
    return event_type
}

function getDiasTreino(event_type){
    let preparation_time = 0

    if(event_type === "Maratona"){
        preparation_time = 50
    } else if(event_type === "Triathlon"){
        preparation_time = 100
    } else {
        preparation_time = 200
    }
    return preparation_time
}

function logEvento(nome, evento) {
    console.log(`Candidato(a) ${nome} participará do evento de ${evento}`)
}

function logTempo(nome, dias_preparacao) {
    console.log(`Candidato(a) ${nome} irá treinar por ${dias_preparacao} dias.`)
}

evento = getEventoAleatorio()
dias_preparacao = getDiasTreino(evento)
logEvento(nome, evento)
logTempo(nome, dias_preparacao)
