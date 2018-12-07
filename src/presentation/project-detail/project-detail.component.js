import * as React from 'react';
import { Card, Header, Icon, Image, Menu, Segment, Sidebar, Grid, GridColumn, Checkbox } from 'semantic-ui-react';
import ManBusiness from '../../images/man-business.svg'

class ProjectDetail extends React.Component {
  render() {
    return (
      <Grid style={{ height: '100%', marginTop: 50 }}>
        <Grid.Row>
          <Grid.Column width={3}>
            <Card align='left' style={{ marginLeft: 20 }} >
              <Image centered src={ManBusiness} fluid />
              <Card.Content>
                <Card.Header>Responsável: {this.props.cliente.name}</Card.Header>
                <Card.Meta>
                  <span className='office'>{this.props.cliente.office}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='mail' />
                  {this.props.cliente.email}
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8} style={{ marginLeft: 40 }} >
            {this.props.project.sprints.map(sprint => {
              <Grid.Row style={{ marginRight: 40 }}>
                <Segment raised>
                  <Header as='h3'>{sprint.theme}</Header>
                  <Segment basic style={{ textAlign: 'justify' }}>
                    {sprint.description}
                  </Segment>
                </Segment>
              </Grid.Row>
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProjectDetail;