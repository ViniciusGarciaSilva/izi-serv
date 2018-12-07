import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import idea from '../../../images/idea.svg'

class IdeaCard extends Component {
  render() {
    return (
      <Card style={{ margin: 30 }}>
        <Image src={idea} />
        <Card.Content>
          <Card.Header>Exponha sua ideia</Card.Header>

          <Card.Description>Exponha sua ideia e escolha um de nossos integradores para torná-la realidade</Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
      </Card>
    )
  }
}

export default IdeaCard;