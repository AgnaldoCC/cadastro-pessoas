import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './main/reducers'
import thunk from 'redux-thunk';
import promise from 'redux-promise'

const store = applyMiddleware(thunk, promise)(createStore)(rootReducer)

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root'));

