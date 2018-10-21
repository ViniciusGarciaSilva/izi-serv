import React, { Component } from 'react';
import { Item, Label, Segment, Grid, Card, Image, Icon, Divider, Header, Container } from 'semantic-ui-react';
import Project from '../global/project';
import InfiniteScroll from 'react-infinite-scroller';
import Integrador from '../global/integrador';
import ManBusiness from '../images/man-business.svg';
import CardExampleCard from '../components/cards/prestador-card';
import ProjectCard from '../components/cards/project-card';
import ServiceCard from '../components/cards/service-card';
import { CardGroup } from 'semantic-ui-react';

class prestadores extends Component {
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

export default prestadores;
