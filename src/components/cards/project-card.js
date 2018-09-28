import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import project from '../../images/project.svg'

class ProjectCard extends Component {
    render() {
        return (
            <Card style={{margin:30}}>
                <Image src={project} />
                <Card.Content>
                    <Card.Header>Assuma um projeto</Card.Header>

                    <Card.Description>Transforme uma das ideias disponíveis em um projeto real</Card.Description>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
            </Card>
        )
    }
}

export default ProjectCard;