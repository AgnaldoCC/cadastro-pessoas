const INITIAL_STATE = { tarefas: [], user:{name: '', lastname:'', cpf:'' ,email:'', profission:''}}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'CADASTRA':
            return { tarefas: state.tarefas.push(action.payload)}
        case 'NAME_CHANGED':
            return {...state, user: {name: action.payload}}
    }
} 
