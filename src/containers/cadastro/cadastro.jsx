import React, { Component } from 'react'
import { Button, Row, Input } from 'react-materialize'

class Cadastro extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Input placeholder="Nome" s={6} label="First Name"/>
                    <Input s={6} placeholder="Sobrenome" label="Last Name" />
                    <Input placeholder="CPF" label="CPF" s={12} />
                    <Input type="email" label="Email" s={12} />
                    <Input s={12} type='select' label="Materialize Select" defaultValue='professor'>
                        <option value='professor'>Professor</option>
                        <option value='aluno'>Aluno</option>
                    </Input>
                </Row>
                <div className='botaoCadastro'>
                    <Button waves='light'>Cadastre</Button>
                </div>
            </div>
        )
    }

}

export default Cadastro