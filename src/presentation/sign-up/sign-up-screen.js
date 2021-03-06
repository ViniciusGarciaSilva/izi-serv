import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo3 from '../../images/Logo3.png';

const options = [
	{ key: 'alta', text: 'Cliente', value: 'cliente' },
	{ key: 'media', text: 'Integrador', value: 'integrador' },
	{ key: 'baixa', text: 'Prestador de Serviço', value: 'prestador' },
]

class SignUpScreen extends Component {
	render() {
		return (
			<div className='sign-in-form' style={{ marginTop: 50 }}>
				<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' textAlign='center' style={{ color: '#2185d0' }}>
							<Image src={logo3}/> Cadastre-se
            </Header>
						<Form size='large'>
							<Segment stacked>
								<Form.Input fluid placeholder='Nome' />
								<Form.Input fluid placeholder='Sobrenome' />
								<Form.Input fluid placeholder='Email' />
								<Form.Input fluid placeholder='Senha' type='password' />
								<Form.Input fluid placeholder='Confirme sua senha' type='password' />
								<Form.Select fluid label='Tipo de usuário' placeholder='Tipo de usuário' options={options} />

								<Message>
									Você aceita o Contrato do Usuário, a Política de Privacidade e a Política de Cookies do GG IZI.
                                </Message>
								<Button fluid size='large' style={{ background: '#2185d0', color: 'white' }}>
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