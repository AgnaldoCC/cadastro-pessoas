import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementa, decrementa } from './menuActions.jsx'
import { bindActionCreators } from 'redux';

import { Button, Navbar, Icon, NavItem } from 'react-materialize'

class Menu extends Component {

    render() {
        return (
            <div className="menu">            
                <Navbar right>
                    <NavItem href='/cadastro'><Icon>add</Icon></NavItem>
                    <NavItem href='/about'><Icon>info</Icon></NavItem>
                </Navbar>
            </div>

        );
    };
}

const mapStateToProps = state => ({
    cont: state.menu.cont
})

const mapDispatchToProps = dispatch => bindActionCreators({ incrementa, decrementa }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
