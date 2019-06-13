import React from 'react';
import logo from './logo.svg';
import './App.css';

function ShowBanner(proms) {
  if (proms.time > 45) {
    return (
      <div className="rest-block"> Relaxion </div>
    )
  } else {
    return (
      <div className="work-block"> Time to work on yourself! </div>
    )
  }
}

class Clock extends React.Component {
  constructor(proms) {
    super(proms);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval (
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()}/>
        <h1>Now is the time: {this.state.date.toLocaleTimeString()} </h1>
      </div>
    )
  }
}

export default Clock;
