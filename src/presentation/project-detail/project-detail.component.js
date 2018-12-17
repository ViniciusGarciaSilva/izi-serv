import * as React from 'react';
import { Card, Header, Icon, Image, Segment, Grid, Divider } from 'semantic-ui-react';
import ManBusiness from '../../images/man-business.svg'

class ProjectDetail extends React.Component {
  render() {
    return (
      <Grid style={{ height: '100%', marginTop: 50 }}>
        <Grid.Row>
          <Grid.Column width={3} style={{ marginLeft: 20 }}>
            <Card align='left' >
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
          <Grid.Column width={7} style={{ marginLeft: 20, marginRight: 20 }} >
            {this.props.project.sprints.map(sprint => (
              <Grid.Row style={{ marginBottom: 40 }}>
                <Segment raised>
                  <Header style={{marginTop: 15}} as='h3'>{sprint.theme}</Header>
                  <Segment basic style={{ textAlign: 'justify' }}>
                    {sprint.description}
                  </Segment>
                </Segment>
              </Grid.Row>
            ))}
          </Grid.Column>
          <Grid.Column width={4}>
            {this.props.project.functionalRequirements.map(requirement => {
              var priority = { secondary: false, tertiary: false };
              if (requirement.priority === 'High') {
                priority.secondary = false;
                priority.tertiary = false;
              }
              if (requirement.priority === 'Medium') {
                priority.secondary = true;
              }
              if (requirement.priority === 'Low') {
                priority.tertiary = true;
              }
              return (
                <Segment inverted color='blue' secondary={priority.secondary} tertiary={priority.tertiary} >
                  {requirement.name}
                </Segment>
              )
            })}
            <Divider style={{ marginTop: 40, marginBottom: 40 }} />
            {this.props.project.notFunctionalRequirements.map(requirement => {
              var priority = { secondary: false, tertiary: false };
              if (requirement.priority === 'High') {
                priority.secondary = false;
                priority.tertiary = false;
              }
              if (requirement.priority === 'Medium') {
                priority.secondary = true;
              }
              if (requirement.priority === 'Low') {
                priority.tertiary = true;
              }
              return (
                <Segment inverted color='blue' secondary={priority.secondary} tertiary={priority.tertiary} >
                  {requirement.name}
                </Segment>
              )
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProjectDetail;