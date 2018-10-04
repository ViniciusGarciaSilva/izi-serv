import React, { Component } from 'react';
import { Container, Input, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../images/logo.png'

class SignUpScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='sign-in-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src= {logo} /> Cadastre-se
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                {/* <h5 style={{textAlign: "left"}}>Nome</h5> */}
                                <Form.Input fluid placeholder='Nome'/>

                                {/* <h5 style={{textAlign: "left"}}>Sobrenome</h5> */}
                                <Form.Input fluid placeholder='Sobrenome'/>
                                <Form.Input fluid placeholder='Email'/>
                                <Form.Input fluid placeholder='Senha' type='password' />
                                <Form.Input fluid placeholder='Confirme sua senha' type='password' />

                                <Message>
                                    Você aceita o Contrato do Usuário, a Política de Privacidade e a Política de Cookies do GG IZI.
                                </Message>
                                <Button color='teal' fluid size='large'>
                                    Aceite e cadastre-se
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
export default SignUpScreen;