import React, { Component } from "react";

class MyBooks extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  handleClick = (e)=> {
    e.stopPropagation()
    console.log("click")
    this.props.onFaveToggle()
  }
  render() {
    const isMyBooks = this.props.isMyBooks ? 'remove_from_queue' : 'add_to_queue'
    const message = this.props.isMyBooks ? "remove_from_queue" : "add_to_queue"
    return (
      <div className={`film-row-fave ${isMyBooks}`} onClick={this.handleClick}>
        <p className="material-icons">{message}</p>
      </div>
    );
  }
}

export default MyBooks;