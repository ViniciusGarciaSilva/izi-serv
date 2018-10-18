import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import service from '../../images/service.svg'

class ServiceCard extends Component {
  render() {
    return (
      <Card style={{ margin: 30 }}>
        <Image src={service} />
        <Card.Content>
          <Card.Header>Execute um serviço</Card.Header>
          <Card.Description>Escolha uma das vagas disponíveis de um projeto e ofereça seu serviço</Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
      </Card>
    )
  }
}

export default ServiceCard;