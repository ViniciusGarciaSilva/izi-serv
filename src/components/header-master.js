import React from 'react'
import { Menu, Segment, Header, Visibility } from 'semantic-ui-react'

const HeaderMaster = () => {
  return (
    <Segment inverted
      color='blue tertiary'
      textAlign='center'
      style={{ backgroundcolor: 'black', minHeight: 300, padding: '1em 0em' }}
      vertical
    >
      <Menu fixed='top' inverted color='blue' pointing size='large'>
        <Menu.Item
          name='home'
          active={true}
          onClick={this.handleItemClick} />
        <Menu.Item
          name='messages'
          active={false}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={false}
          onClick={this.handleItemClick}
        />
      </Menu>
    </Segment>
  )

}

export default HeaderMaster;

