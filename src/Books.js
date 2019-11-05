import React, {Component} from 'react';
import Search from './Search';
import axios from 'axios';
import BookList from './BookList';


class Books extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchField:''
        }
    }
    
searchBook =(e) => {
    e.preventDefault();

    this.props.getBooks(this.state.searchField)
//   axios
//    .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`)
//    .then((res) => { 
//        this.setState({
//            books:res.data.items
//         //    books:res.data.items
//        })
//     //    console.log(res.data.items[0].volumeInfo.title);
//     //    console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail);
//     //    console.log(res.data.items[0].volumeInfo.authors);
//     //    console.log(res.data.items[0].volumeInfo.language);
//     //    console.log(res.data.items[0].volumeInfo.description);

//    });
}


    handleSearch=(e) => { 
        this.setState({searchField:e.target.value})
    }
    render() {
        // const fox = this.state.books.map((item, index)=> {
        //     return <div>
        //         <h2> Title: {''} {item.volumeInfo.title}</h2>
        //         <img src={item.volumeInfo.imageLinks.thumbnail} />
        //         <h6> Language:{ ''}    {item.volumeInfo.language}</h6>
        //         <p>publishedDate:{''}  {item.volumeInfo.publishedDate}</p>
        //         <p>{item.volumeInfo.description}</p>

        //     </div>
        // })
        return (
            <div>
<Search seachBook={this.searchBook} handleSearch= {this.handleSearch} />
 {/* <div>{fox}</div> */}
 <BookList books={this.props.books} handleFaveToggle={this.props.handleFaveToggle}/>
            </div>
        )
    }
}

export default Books;
