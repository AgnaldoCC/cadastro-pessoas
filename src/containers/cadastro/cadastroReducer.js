const INITIAL_STATE = { tarefas: [], user: { name: '', lastname: '', cpf: '', email: ''} }

export default function (state = INITIAL_STATE, action) {
    console.log(action)
    switch (action.type) {
        case 'CADASTRA':
            return { tarefas: state.tarefas.push(action.payload) }
        case 'NAME_CHANGED':
            return { ...state, user: { name: action.payload, lastname: state.user.lastname, cpf: state.user.cpf, email: state.user.email}}
        case 'LASTNAME_CHANGED':
            return { ...state, user: { name: state.user.name, lastname: action.payload, cpf: state.user.cpf, email: state.user.email}}
        case 'CPF_CHANGED':
            return { ...state, user: { name: state.user.name, lastname: state.user.lastname, cpf: action.payload, email: state.user.email}}
        case 'EMAIL_CHANGED':
            return { ...state, user: { name: state.user.name, lastname: state.user.lastname, cpf: state.user.cpf, email: action.payload}}

        default:
            return state
    }
} 
