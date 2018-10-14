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
          />
        </Link>
        <Link to='/projetos'>
          <Menu.Item
            name='projetos'
            active={false}
          />
        </Link>
        <Link to='/integradores'>
          <Menu.Item
            name='integradores'
            active={false}
          />
        </Link>
        <Link to='/prestadores'>
          <Menu.Item
            name='prestadores'
            active={false}
          />
        </Link>
      </Menu>
    )
  }
}

export default HeaderMaster;

