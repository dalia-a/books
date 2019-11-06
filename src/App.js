import React from 'react';
import './App.css';
 import Books from './Books';
 import Navagation from './Navagation';
 import {BrowserRouter as HashRouter, Route, Link} from 'react-router-dom'
 import Home from './Home';
 import MyBooks from './MyBooks';
 import Contact from './Contact'
 import axios from 'axios';
 import Footer from "./footer";


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
  

    // MyBook.push(book);
    MyBook = [...MyBook,book]
    //  console.log(`Adding ${book.title} To MyBooks`)
   
   this.setState({MyBooks: MyBook})
 }

 HandleClear =(book)=>{
   console.log(book)
  let MyBook=[...this.state.MyBooks];
  const bookIndex = MyBook.indexOf(book)
  if (bookIndex !== -1){
    MyBook.splice(bookIndex, 1);
  }
  // console.log(book)
  this.setState({
    MyBooks: MyBook
  })
  // console.log(this.state.books)
}

clearAll=()=>{
  // console.log("llllllllll")
  this.setState({
    MyBooks: []
  })
  // console.log(this.state.MyBook)
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
    
       
      <HashRouter basename="/books">
      <Navagation MyBooks={this.state.MyBooks.length} />
      
        

    <div>
      
     <Route exact path ='/' component={Home}/>
     < Route path ='/Books' render={(...props) => 
     <Books books={this.state.books}
      getBooks={this.getBooks}
       MyBooks={this.state.MyBooks}
        handleFaveToggle={this.handleFaveToggle}/>}/>
        
     < Route path ='/MyBooks' render={(...props) => 
     <MyBooks MyBooks={this.state.MyBooks} 
      HandleClear={this.HandleClear} clearAll={this.clearAll}/>}/>
     
     <Route  path ='/Contact' component={Contact}/>
     <Footer/>
   </div>
   </HashRouter>
  
   </>
 
  );

}

 }
export default App;




