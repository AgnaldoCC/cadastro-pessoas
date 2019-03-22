import { combineReducers } from 'redux'
import menuReducer from '../containers/menu/menuReducer';
import cadastroReducer from '../containers/cadastro/cadastroReducer'

const rootReducer = combineReducers({
    menu: menuReducer,
    cadastro: cadastroReducer
})

export default rootReducer