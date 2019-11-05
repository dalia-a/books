import React, { Component } from "react";

class MyBooks extends Component {
    
    render() {
        let allbook;
        {console.log(this.props.MyBooks.length)}
        if( this.props.MyBooks.length>0 )
        {console.log(this.props.MyBooks)
            allbook=this.props.MyBooks.map((book,index)=>{
            
            return (
                <div>
                     <div className="card my-card" >
       <img  src={book.volumeInfo.imageLinks.thumbnail}/> </div>
                {/* <img src={book.imageLinks.thumbnail}/> */}
                 <h4>{book.volumeInfo.title}</h4>
                <h5> {book.volumeInfo.authors} </h5> 
                <p>{book.publishedDate}</p>
                 
            </div>
        )
    })} 
    return (
        
        <div>
{allbook}
    
    </div>
    );
  }
}

export default MyBooks;