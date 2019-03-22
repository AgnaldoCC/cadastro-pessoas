const INITIAL_STATE = { cont: +0 }

function menuReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'INCREMENTA':
            return { cont: state.cont + 1}
        case 'DECREMENTA':
            return {cont: state.cont - 1}
        default:
            return state
    }
}

export default menuReducer