import React from 'react'
import mail from './gmail.svg'
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
const Contact = (props) => {
    return(
<div>
<p className="this-app email">
 <span> Dalia Abdullah      <a href="mailto:dalia.91a@gmail.com"> 
 <img src={mail} alt="#" height='30px' /></a>
  </span> 
 </p>
 <Particles 
              params={particleOpt} />
 
       
        </div>
    );
}
export default Contact;