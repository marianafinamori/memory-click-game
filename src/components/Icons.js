import React, { Component } from 'react';
import IconItem from "./IconItem"
import PropTypes from "prop-types"
// import './App.css';

class Icons extends Component {
  // changeClickedStatus = () => {
  //   console.log("it's working")
  // }
  render() {
    return this.props.icons.map((icon) => (
      <div> 
      <IconItem key={icon.id} icon={icon} changeClickedStatus={this.props.changeClickedStatus}/>
      </div>
  
    ))
  }
}

//PropTypes
Icons.propTypes = {
  icons: PropTypes.array.isRequired,
  changeClickedStatus: PropTypes.func.isRequired
}

export default Icons;