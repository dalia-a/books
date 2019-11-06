import React, {Component} from 'react'
import Particles from 'react-particles-js';


const particleOpt ={
    particles:{
        number:{
            value:150,
            density:{
                enable:true,
                value_area:800
            }
        }
    }
}
const Home = (props) => {
    return(
         <div>

<div>


<p className="this-app">


” Once You Learn To Read,You Will Be Forever Free ”
  
</p>


              <Particles 
              params={particleOpt}
             />
        
        </div>
        </div>
    );
}
export default Home;