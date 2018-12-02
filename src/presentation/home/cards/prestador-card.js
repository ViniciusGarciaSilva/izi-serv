import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class CardExampleCard extends React.Component {
  render() {
    return(
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2017</span>
          </Card.Meta>
          <Card.Description>Matthew is a full-stack web developer</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            25 finished projects
          </a>
        </Card.Content>
      </Card>
    )
  }
}
  

export default CardExampleCard