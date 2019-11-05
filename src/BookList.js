import React from 'react';
import BookCard from './BookCard';

const BookList =(props) => {
    return(
       <div className="list">
        {
            props.books.map((item ,index)=>{
                return <BookCard
                          key={index}  
                          image={item.volumeInfo.imageLinks.thumbnail}
                          title={item.volumeInfo.title}
                          author={item.volumeInfo.authors}
                          published={item.volumeInfo.publishedDate}
                          />

            })
        }

       </div>
    );
}

export default BookList;