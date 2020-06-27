import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import CV from './Components/CV';
import Contact from './Components/Contact';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({ data });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main}/>
        <About data={this.state.data.main}/>
        <CV data={this.state.data.cv}/>
        <Contact data={this.state.data.main}/>
        <Footer data={this.state.data.main}/>
      </div>
    );
  }
}

export default App;
