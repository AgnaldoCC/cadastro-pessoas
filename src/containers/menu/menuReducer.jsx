export const INITIAL_STATE = { cont: +0 }

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'INCREMENTA':
            return { cont: state.cont + 1}
        default:
            return state
    }

}