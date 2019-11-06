import React from 'react';

const BookCard =(props) => {
    return(
        
        // author={item.volumeInfo.authors}
        
        <div className="card my-card" >
       <img src={props.book.imageLinks.thumbnail}/>
         {/* <img src={props.image} className="card-img-top" alt="..."/> */}
            <div className="card-body text-center ">
                <h5 className="card-title">{props.book.title}</h5>
                <h6>{props.book.authors}</h6>
                <p className="card-text">publishedDate: {props.book.publishedDate === '0000' ? 'Not available':props.book.publishedDate.substring(0,4)}</p>
                <div class="card-footer bg-transparent border-success">

                <button  className="btn btn-info mybtn" onClick={props.handleFaveToggle}>Add To MyBooks </button>
        </div>                
        </div>
        </div>
        
    
    );
}

export default BookCard;

{/* //    <div className="card-container">
    //        <img src={props.image}alt=""/>
    //        <div className ="desc">
    //            <h3>{props.title}</h3>
    //            <h4> Author: {props.author}</h4>
    //            <p> publishedDate: {props.published === '0000' ? 'Not available':props.published.substring(0,4)}</p>
    //        </div>
        
        
    //    </div> */}