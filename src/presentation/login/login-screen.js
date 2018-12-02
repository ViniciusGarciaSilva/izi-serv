import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from '../../images/logo.png'

class LoginScreen extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div className='login-form' style={{ marginTop: 50 }}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center' style={{ color: '#2185d0' }}>
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

                <Button fluid size='large' style={{ background: '#2185d0', color: 'white' }}>
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