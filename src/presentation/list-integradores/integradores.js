import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CardGroup } from 'semantic-ui-react';
import UserCard from './../../components/user-card';


class Integradores extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    var itens = [];
    itens.push(
      <div>
        <CardGroup fluid centered style={{ marginTop: 50 }}>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </CardGroup>
      </div>,
      <div>
      <CardGroup fluid centered style={{ marginTop: 50 }}>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </CardGroup>
      </div>,
      <div>
        <CardGroup fluid centered style={{ marginTop: 50 }}>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </CardGroup>
    </div>,
    );
    return (
      <InfiniteScroll
        pageStart={0}
        // loadMore={loadFunc}
        hasMore={true}
        loader={<div className="loader" key={0}></div>}
    >
       {itens}
      </InfiniteScroll>
    );
  }
}

export default Integradores;
