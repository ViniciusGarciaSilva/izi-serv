import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Redirect, Link } from 'react-router-dom';

class HeaderMaster extends React.Component {
  render() {
    return (
      <Menu fixed='top' inverted color='blue' pointing size='large'>
        <Link to='/'>
          <Menu.Item
            name='home'
            active={true}
          />
        </Link>
        <Link to='/minha-conta'>
          <Menu.Item
            name='minha conta'
            active={false}
            onClick={this.props.onClick('/minhaconta')}
          />
        </Link>
        <Link to='/projetos'>
          <Menu.Item
            name='projetos'
            active={false}
            onClick={this.props.onClick('/projetos')}
          />
        </Link>
        <Link to='/integradores'>
          <Menu.Item
            name='integradores'
            active={false}
            onClick={this.props.onClick('/integradores')}
          />
        </Link>
        <Link to='/prestadores'>
          <Menu.Item
            name='prestadores'
            active={false}
            onClick={this.props.onClick('/prestadores')}
          />
        </Link>
      </Menu>
    )
  }
}

export default HeaderMaster;

