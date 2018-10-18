import React from 'react'
import { Step } from 'semantic-ui-react'

class StepsIdea extends React.Component {

  checkStep(step) {
    if (this.props.steps[step].valid) {
      return { completed: true, active: false };
    } else {
      return { completed: false, active: true };
    }
  }

  render() {
    return (
      <Step.Group fluid ordered>
        <Step onClick={() => this.props.onClick(1)} {...this.checkStep(1 - 1)} >
          <Step.Content>
            <Step.Title>Informações Gerais</Step.Title>
            <Step.Description>Nome e a ideia geral do projeto</Step.Description>
          </Step.Content>
        </Step>

        <Step onClick={() => this.props.onClick(2)} {...this.checkStep(2 - 1)}>
          <Step.Content>
            <Step.Title>Requisitos Funcionais</Step.Title>
            <Step.Description>Requisitos funcionais do projeto</Step.Description>
          </Step.Content>
        </Step>

        <Step onClick={() => this.props.onClick(3)} {...this.checkStep(3 - 1)}>
          <Step.Content>
            <Step.Title>Requisitos Não Funcionais</Step.Title>
            <Step.Description>Requisitos não-funcionais do projeto</Step.Description>
          </Step.Content>
        </Step>

        <Step onClick={() => this.props.onClick(4)} {...this.checkStep(4 - 1)}>
          <Step.Content>
            <Step.Title>Sprints</Step.Title>
            <Step.Description>Entregas e datas do projeto</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}

export default StepsIdea;
