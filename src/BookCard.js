import React from 'react';

const BookCard =(props) => {
    return(
   
        <div className="card my-card" >
         <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body ">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">publishedDate: {props.published === '0000' ? 'Not available':props.published.substring(0,4)}</p>
                <button  className="btn btn-info mybtn">Add or remove to MyBooks </button>
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