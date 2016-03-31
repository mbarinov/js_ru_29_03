import React, {
  Component
}
from 'react';
import {
  Comment,
} from './Comment';

export class CommentList extends Component {
  render() {
    return (
      <ul>
        {this.getComments()}
      </ul>)
  }

  getComments() {
    const { comments } = this.props;
    return comments.map(comment =>
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    )
  }
}
