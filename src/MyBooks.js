import React, { Component } from "react";

class MyBooks extends Component {
    
    render() {
        let allbook;
        {console.log(this.props.MyBooks.length)}
        if( this.props.MyBooks.length>0 )
        {console.log(this.props.MyBooks)
            allbook=this.props.MyBooks.map((book,index)=>{
            
            return (
                <div className="list">

                     <div className="card my-card" >
                <img  src={book.volumeInfo.imageLinks.thumbnail}/> 
                {/* <img src={book.imageLinks.thumbnail}/> */}
                <div className="card-body  card-boddy">
                <h5 className="card-title"> {book.volumeInfo.title}</h5>
                <h6> {book.volumeInfo.authors} </h6> 
                <p className="card-text"> {book.publishedDate} </p> 
                <button  className="btn btn-danger mybtn" onClick={()=>this.props.HandleClear(book)}> remove From MyBooks </button>
                
                </div>  
            </div>
          </div>
        )
    })} 
    return (
        
        <div>
        
{allbook}
    <button className="btn2 btn-danger" onClick={this.props.clearAll} >Clear All</button>
    </div>
    );
  }
}

export default MyBooks;