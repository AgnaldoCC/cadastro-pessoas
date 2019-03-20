import { createStore } from 'redux'

import rootReducer from '../main/reducers'
import INITIAL_STATE from '../containers/menu/menuReducer'

const store = createStore(rootReducer, INITIAL_STATE)

export default store