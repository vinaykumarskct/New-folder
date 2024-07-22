import React from 'react'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import LoginForm from './LoginForm/LoginForm'
import Signin from './Signin/Signin'
import Forget from './Forget/Forget'
import Home2 from './Home2/Home2'
import Card3 from './Card/Card3'
import Card1 from './Card/Card1'
import Card2 from './Card/Card2'
import Contactus from './Contactus/Contactus'
import Review from './Review/Review'
import App1 from './Aboutus/App1'
import TravelBlog from './TravelBlog/TravelBlog'

import Write from './Write/Write'

import Payment1 from './Payment1/Payment1'
import Packages from './Packages/Packages'
import Learn from './Learn/Learn'
import FlightBookingForm from './FlightBooking/FlightBookingForm'



const App = () => {
  return ( 
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>}>
        </Route>

        <Route path="/SignUp" element={<Signin/>}></Route>



        <Route path="/Forget" element={<Forget/>}></Route>


        <Route path="/Home" element={<Home2/>}></Route>

        <Route path="/card" element={<Card3/>}></Route>
        <Route path="/card1" element={<Card1/>}></Route>
        <Route path="/card2" element={<Card2/>}></Route>

        <Route path="/contact" element={<Contactus/>}></Route>

        <Route path="/review" element={<Review/>}></Route> 

        <Route path="/app" element={<App1/>}></Route>

        <Route path="/travel" element={<TravelBlog/>}></Route> 
        
        <Route path="/pack" element={<Packages/>}></Route> 


        <Route path="/write" element={<Write/>}></Route>  
          
        <Route path="/pay" element={<Payment1/>}></Route>
        <Route path="/more" element={<Learn/>}></Route>
        <Route path="/flight" element={<FlightBookingForm/>}></Route>

       






        

        
       

     
        
      </Routes>
      </Router>
    </div>
  )
}

export default App