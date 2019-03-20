import { combineReducers } from 'redux'
import menuReducer from '../containers/menu/menuReducer';

const rootReducer = combineReducers({
    menu: menuReducer
})

export default rootReducer