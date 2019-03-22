export function adiciona(tarefa){
    return {
        type: 'CADASTRA',
        payload: tarefa
    }
}

export function escreve(event, atributo){
    type = ''
    switch (atributo){
        case 'name':
            type = 'NAME_CHANGED'
        case 'lastname':
            type = 'LASTNAME_CHANGED'
        case 'cpf':
            type = 'CPF_CHANGED'
        case 'email':
            type = 'EMAIL_CHANGED'
    }

    return {
        type: type,
        payload: event.target.value
    }
}