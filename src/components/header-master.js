import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const HeaderMaster = () => {
  return (
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
  )

}

export default HeaderMaster;

