import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import About from '../containers/about/about.jsx'
import Cadastro from '../containers/cadastro/cadastro.jsx'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/cadastro' component={Cadastro} />
            <Redirect from='/' to='/about'></Redirect>
        </Switch>
    </BrowserRouter>
)