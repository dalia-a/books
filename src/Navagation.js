import React from 'react';
import { Link } from 'react-router-dom'
import boxx from './boxx.svg'



class Navagation extends React.Component{
    render(){

        return(
  
         <nav className="navbar navbar-expand-md navbar-light bg-info">
         <a className="navbar-brand" href="./Home">
         <img src={boxx} width="50" height="50" alt=""/> 
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
         </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link  className="nav-link" to='/'>Home</Link> 
      </li>
      <li className="nav-item active">
      <Link  className="nav-link" to='/Books'>Books</Link>
      </li>
      <li className="nav-item active">
      <Link  className="nav-link" to='/MyBooks'> MyBooks <span className="Add">{this.props.MyBooks}</span></Link>
      </li>
      <li className="nav-item active">
      <Link  className="nav-link" to='/Contact'> Contact </Link>
      </li>
    </ul>
   
  </div>
</nav>

        );
    }
}
export default Navagation;