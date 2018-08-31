import React, { Component } from 'react';
import './ContentBlock.scss';

class ContentBlock extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ContentBlock container">
        {this.props.content}
      </div>
    );
  }
}

export default ContentBlock;
