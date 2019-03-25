import React, { Component } from 'react'
import { Button, Row, Input } from 'react-materialize'
import {escreveNome, escreveSobrenome, escreveCpf, escreveEmail} from './cadastroActions.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Cadastro extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div>
                <Row>
                    <Input placeholder="Nome" s={6} label="First Name" onChange={this.props.escreveNome}/>
                    <Input s={6} placeholder="Sobrenome" label="Last Name" onChange={this.props.escreveSobrenome}/>
                    <Input placeholder="CPF" label="CPF" s={12} onChange={this.props.escreveCpf}/>
                    <Input type="email" label="Email" s={12} onChange={this.props.escreveEmail}/>
                    
                </Row>
                <div className='botaoCadastro'>
                    <Button waves='light'>Cadastre</Button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    tarefas: state.cadastro.tarefas,
    user: state.cadastro.user
})



const mapDispatchToProps = dispatch => bindActionCreators({escreveNome, escreveSobrenome, escreveCpf, escreveEmail}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)