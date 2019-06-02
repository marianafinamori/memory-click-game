import React, { Component } from 'react';
import PropTypes from "prop-types"



class IconItem extends Component {
  render() {
    const {id, name, src} = this.props.icon;
    return (
      // <div>
        <img className="ml-3" alt={name} src={src} key={id} data-id={id} onClick={this.props.changeClickedStatus.bind(this, id)} />
     // </div>
    );
  }
}

//PropTypes
IconItem.propTypes = {
  icon: PropTypes.object.isRequired,
  changeClickedStatus: PropTypes.func.isRequired
}

export default IconItem;