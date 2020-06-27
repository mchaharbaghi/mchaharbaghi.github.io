import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import CV from './components/CV/CV';
import Contact from './components/Contact/Contact';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {}
    };
  }

  getData(){
    const data = require('./data/data.json'); 
    this.setState({
      data
    })
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    const { 
      data: {
        main,
        cv
      }
    } = this.state;

    return (
      <div className="App">
        <Header data={main}/>
        <About data={main}/>
        <CV data={cv}/>
        <Contact data={main}/>
        <Footer data={main}/>
      </div>
    );
  }
}

export default App;
