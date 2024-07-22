import React,{useState} from 'react'
import './Contactus.css'
import axios from 'axios'
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';



export const Contactus = () => {
  const[apidata,setApidate]=useState()
  const[apidata1,setApidate1]=useState()
  const[apidata2,setApidate2]=useState()
  const[apidata3,setApidate3]=useState()
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        setApidate(response.data[0].phone)
        setApidate1(response.data[0].email)
        setApidate2(response.data[0].address.street)
        setApidate3(response.data[0].company.name)
        console.log("response=======>>>>>>>>",response);
    })
  return (
    <div class="popups-container">
      <div class="popups">
        <h1 ><center>CONTACT US!!</center></h1>
        
        <h2 class="line"><PermIdentitySharpIcon/> {apidata3}</h2>
        <h2 class="line">
          <InstagramIcon/>
             www.Instagram.com
        </h2>
        <h2 class="line"><PhoneInTalkIcon/> {apidata}
        </h2>
        <h2 class="line"><LocalPostOfficeIcon/> 
        <a  class="col"href="mailto:Sincere@april.biz.edu.in" >{apidata1}</a></h2>
        <h2 class="line"><WhatsAppIcon/> +91 7033868134</h2>
        <h2 class="line"><PlaceIcon/>{apidata2}</h2>
        <button class="button">Back</button>
      
    </div>
   </div>
)
}
export default Contactus