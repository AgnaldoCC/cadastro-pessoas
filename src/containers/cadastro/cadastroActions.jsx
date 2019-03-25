export function adiciona(tarefa){
    return {
        type: 'CADASTRA',
        payload: tarefa
    }
}

export function escreveNome(event){
    return {type: 'NAME_CHANGED', 
        payload: event.target.value
    }    
}

export function escreveSobrenome(event){
    return {type: 'LASTNAME_CHANGED', 
        payload: event.target.value
    }    
}

export function escreveCpf(event){
    return {type: 'CPF_CHANGED', 
        payload: event.target.value
    }    
}

export function escreveEmail(event){
    return {type: 'EMAIL_CHANGED', 
        payload: event.target.value
    }    
}