import React from 'react';
import './App.css';
 import Books from './Books';
 import Navagation from './Navagation';
 import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
 import Footer from "./Footer";
 import Home from './Home';
 import MyBooks from './MyBooks';
 import Contact from './Contact'
 import axios from 'axios';


 class App extends React.Component{

constructor(props){
  super(props)
  this.state={
    books:[],
    MyBooks:[]

  }
}


handleFaveToggle = (book)=> {
  console.log(book)
  let MyBook=[...this.state.MyBooks];
  const bookIndex = MyBook.indexOf(book)

    if (bookIndex !== -1){
      MyBook.splice(bookIndex, 1);
      // console.log(`Removing ${book.title} From MyBooks`)
   }else{
    // MyBook.push(book);
    MyBook = [...MyBook,book]
    //  console.log(`Adding ${book.title} To MyBooks`)
   }
   this.setState({MyBooks: MyBook})
 }



  getBooks =(word)=>{
    axios
   .get(`https://www.googleapis.com/books/v1/volumes?q=${word}`)
   .then((res) => { 
       this.setState({
           books:res.data.items
        //    books:res.data.items
       })
    //    console.log(res.data.items[0].volumeInfo.title);
    //    console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail);
    //    console.log(res.data.items[0].volumeInfo.authors);
    //    console.log(res.data.items[0].volumeInfo.language);
    //    console.log(res.data.items[0].volumeInfo.description);

   });
  }


  render(){
    
  return (
    <>
    
       
      <Router>
      <Navagation />
      
        

    <div>
      
     <Route exact path ='/' component={Home}/>
     < Route path ='/Books' render={(...props) => 
     <Books books={this.state.books}
      getBooks={this.getBooks}
       MyBooks={this.state.MyBooks}
        handleFaveToggle={this.handleFaveToggle}/>}/>
     < Route path ='/MyBooks' render={(...props) => 
     <MyBooks MyBooks={this.state.MyBooks}/>}/>
     {/* <Route path='/contact' component={Contact}/> */}
   </div>
   </Router>
  
   </>
 
  );

}

 }
export default App;




