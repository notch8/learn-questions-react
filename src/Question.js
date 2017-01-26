import React, { Component } from 'react'

class Question extends Component {
  upvoteClick(e) {
    this.props.upvoteHandler(this.props.index);
  }

  render () {
    return (
      <span>
        {this.props.text} ({this.props.upvotes})
        <button onClick={this.upvoteClick.bind(this)}>Upvote</button>
      </span>  
    )
  }
}

export default Question
