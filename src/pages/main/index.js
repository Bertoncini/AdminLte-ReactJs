import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import SideBar from './sideBar';
import Content from './content';

class Main extends Component {
  state = {
    menu: []
  }

  componentWillMount() {
   axios.get('http://localhost:4000/menu')
      .then(data => {
        const menu = data.data;
        this.setState({ menu });
      })
  }

  render() {
    return (
      <div>
        <Header />
        <SideBar menu={this.state.menu} />
        <Content />
      </div>
    );
  }
}

export default Main;