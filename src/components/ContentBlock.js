import React, { Component } from 'react';
import './scss/ContentBlock.scss';

class ContentBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ContentBlock container">
        {this.props.children}
      </div>
    );
  }
}

export default ContentBlock;
