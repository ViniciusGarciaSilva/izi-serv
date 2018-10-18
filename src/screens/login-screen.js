import React, { Component } from 'react';
import { Container, Input, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import './login.css';
import logo from '../images/logo.png'
import background from '../images/background.jpg'


class LoginScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src={logo} /> Faça o login na sua conta
                        </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Senha'
                  type='password'
                />

                <Button color='teal' fluid size='large'>
                  Login
                                </Button>
              </Segment>
            </Form>
            <Message>
              Não tem cadastro? <a href='#'>Cadastre-se agora</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default LoginScreen;