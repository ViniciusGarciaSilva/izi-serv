import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CardGroup } from 'semantic-ui-react';
import CardExampleCard from './../home/cards/prestador-card';

class Prestadores extends Component {
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
          <CardExampleCard/>
          <CardExampleCard/>
          <CardExampleCard/>
        </CardGroup>
      </div>,
      <div>
      <CardGroup fluid centered style={{ marginTop: 50 }}>
        <CardExampleCard/>
        <CardExampleCard/>
        <CardExampleCard/>
      </CardGroup>
      </div>,
      <div>
        <CardGroup fluid centered style={{ marginTop: 50 }}>
          <CardExampleCard/>
          <CardExampleCard/>
          <CardExampleCard/>
        </CardGroup>
    </div>,
    );
    return (
      <InfiniteScroll
        pageStart={0}
        // loadMore={loadFunc}
        hasMore={true}
        loader={<div className="loader" key={0}>Loading ...</div>}
    >
       {itens}
      </InfiniteScroll>
    );
  }
}

export default Prestadores;
