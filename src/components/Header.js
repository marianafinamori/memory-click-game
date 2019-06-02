import React, { Component } from 'react';


class Header extends Component {
  render() {
    const {score, topScore, message} = this.props
    // console.log(this.props.game[0])
    return (
      <div className="header"> 
        <h1 id="memory-game-title">Style Icon Memory Game</h1>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <p id="score-container">Score: {score}</p>
          </li>
          <li className="nav-item">
            <p id="topscore-container">Top Score: {topScore}</p>
          </li>
          <li className="nav-item">
            <button className="start-over-btn btn btn-dark" onClick={this.props.start}>START OVER</button>
          </li>
        </ul>
        <h4 id="message-container">{message}</h4>
      </div>
    )
  }
}

export default Header;

