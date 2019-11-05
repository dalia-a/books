import React from 'react';
import BookCard from './BookCard';

const BookList =(props) => {

    // const tt = (item)=> {
    //     props.handleFaveToggle(item)
    // }
    return(
       <div className="list">
        {
            props.books.map((item ,index)=>{
                return <BookCard
                          key={index}  
                        //   handleFaveToggle={tt}
                        handleFaveToggle={(e)=>{props.handleFaveToggle(item)}}
                        book={item.volumeInfo}
                          />

            })
        }

       </div>
    );
}

export default BookList;