import React, { Component } from 'react';

export class Comment extends Component {
  render() {
    const {text} = this.props.comment;
    return (
      <span>{text}</span>
    )
  }
}
