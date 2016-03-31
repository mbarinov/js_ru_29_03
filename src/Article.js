import React, { Component, PropTypes } from 'react';
import {
  CommentList,
} from './CommentList';

class Article extends Component {

    state = {
        isOpen: false,
        isCommentsOpen: false,
    }

    render() {
        const { title, text, comments} = this.props.article;
        const commentsBlock = this.state.isCommentsOpen ? <CommentList comments={comments} /> : null;

        let body = null;
        if (this.state.isOpen) {
          body = <div>
            <section>{text}</section>
            <a href="#" onClick={this.openComments}>Open comments</a>
            <section>{commentsBlock}</section>
          </div>;
        } else {
          this.state.isCommentsOpen = false;
        }

        return (
            <div>
                <h3 onClick={this.openArticle}>{title}</h3>
                {body}
            </div>
        )
    }

    openArticle = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    openComments = (ev) => {
      this.setState({
        isCommentsOpen: !this.state.isCommentsOpen,
      });
    }
}

export default Article
