import "../index.css";
import React,{useState} from "react"
import { NavLink, useNavigate } from "react-router-dom";
import android from "./images/13.png";
import cpluss from "./images/1s.png";
import digitals from "./images/2s.png";
import bootstraps from "./images/12s.png";
import axios from 'axios'
function Signup() {

const navigate = useNavigate()
const [user,setUser]=useState({
    Username:'', Email:'', Password:'', Phone_number:''
})
let name,value;
const handleInput = (e) =>{
    console.log(e)
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
} 

const postdata=async(e)=>{
    e.preventDefault()

    const res=await axios.post("http://localhost:8484/signup",user);

if(res.status === 422 || !res){
window.alert("invalid register" )
console.log("invalid register") 

}
else{window.alert("valid register")
console.log("valid register") ;
navigate("/signin")
}}
return(
<>
<div className="container my-5 animation_in bg_1 p-5 rounded-5">
<div className="row ">
    <div className=" fw-bold info1 text-center mb-5"><span className="display-3"> Sign Up</span></div>
    <div className="col-md-6 col-12 form py-4 text-light">
        <form  method="post">
<div className=" px-1 animation_in">
    <label for="">User Name</label> <br/>
    <input type="text" className="py-3 my-2 w-100  bg-transparent border-0 border-bottom" name="Username" value={user.Username} onChange={handleInput} autoCorrect="off"/>
</div>
<div className=" px-1 animation_in">
    <label for="">Email</label> <br/>
    <input type="text" className="py-3 my-2 w-100  bg-transparent border-0 border-bottom" name="Email" value={user.Email} onChange={handleInput} autoCorrect="off"/>
</div>
<div className=" px-1 animation_in">
    <label for="">Password</label> <br/>
    <input type="text" className="py-3 my-2 w-100  bg-transparent border-0 border-bottom" name="Password" value={user.Password} onChange={handleInput} autoCorrect="off"/>
</div>
<div className=" px-1 my-3 animation_in">
    <label for="">Phone Number</label> <br/>
    <input className="py-3 my-2 w-100  bg-transparent border-0 border-bottom" name="Phone_number" value={user.Phone_number} onChange={handleInput} autoCorrect="off"/>
</div>

<div className=" px-1 my-5 text-center">
   <input type="submit" className="py-3 my-2 w-100 rounded-2 bg_1" onClick={postdata}/>
</div>
</form>
<div className=" px-1 text-center">
    <div className="">Already have a account? <NavLink to="/signin" className="text-decoration-none text-light"> Signin ⬈</NavLink></div>
   
</div>
</div>
   
<div className="col-md-6 col-12">
  
        <div className="text-center info1">
       <img src={cpluss} alt="icofawfn" />
        </div>
        <div className="text-start info1">
       <img src={bootstraps}  alt="icfwafon"/>
        </div>
        <div className="text-end info1">
       <img src={digitals}  alt="icfwafon"/>
        </div>
        <div className="text-center info1">
       <img src={android}  alt="ifwafawcon"/>
        </div>
</div>


</div>

</div>

</>

)}








export default Signup;