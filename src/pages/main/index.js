import React, { Component } from 'react';
import Header from './header';
import SideBar from './sideBar';
import Content from './content';

// import '../../assets/style'

class Main extends Component {
    componentDidMount(){
    }
    render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default Main;