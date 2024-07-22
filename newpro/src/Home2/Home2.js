import React from 'react'
import  "./Home2.css"
import Footer from '../Footer/Footer';
import StepSection from '../StepSection/StepSection';
import Topbar from '../Topbar/Topbar';



const Home2 = () => {
  return (
    <div>
        <div class="banner-area">
    <header>
           <div class="menu">
                <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="/pack">Packages</a></li>
                    <li><a href="/app">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/review">Review</a></li>
                    <li><a href="/write">WRITE BLOG</a></li>
                    <li><a href="/flight">BOOK YOUR FLIGHT</a></li>
                    
                </ul>
            </div>

        </header>
        <div class="banner-text">
            <h1>Travel Blog</h1>
            <br></br>
            <i><p>“Once the travel bug bites there is no known antidote, and I know that I shall be happily infected until the end of my life.”</p></i>
            <br></br>
            <a href="/travel">EXPLORE</a>
           
        </div>

       
    </div>
    <br></br>
    <br></br>
    <div class="todo">
        
        <h1>THINGS TO DO FOR YOUR NEXT TRIP</h1>
    </div>

   <StepSection/>
     
        <Footer/>
   
    </div>
  )
}

export default Home2