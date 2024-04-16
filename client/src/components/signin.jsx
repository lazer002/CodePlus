import React,{useState} from "react"
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css";
import javas from "./images/9s.png";
import angulars from "./images/6s.png";
import sqls from "./images/7s.png";
import cplus from "./images/1.png";
import axios from 'axios'


function Signin() {
  
axios.defaults.withCredentials=true
const navigate = useNavigate()

const [user,setUser]=useState({
    Email:'',Password:''
})
let name,value;
const handleInput=(e)=>{

    name=e.target.name
    value=e.target.value
    setUser({...user,[name]:value})
}

const postdata=async(e)=>{
    e.preventDefault()


    const res=await axios.post("/signin",{user})
if(res.status === 200){

  navigate("/")
 
}else{
  console.log('jfwjafiojwajfiwajfijwa');
}


}
return(
<>

<div className="container my-5 bg_1 p-5 rounded-5">
            <div className="row ">
              <div className=" fw-bold info1 text-center mb-5">
                <span className=" display-3">Sing In</span>
              </div>
              <div className="col-md-6 col-12 form py-4 text-light fs-5">
                <form  method="post">
                  <div className=" px-1 animation_in">
                    <label >Email</label> <br />
                    <input
                      type="text" className="py-3 my-2 w-100  bg-transparent border-0 border-bottom"
                      name="Email" value={user.Email}
                      onChange={handleInput} autoCorrect="off"
                    />
                  </div>
                  <div className=" px-1 animation_in">
                    <label >Password</label> <br />
                    <input
                      type="text"
                      name="Password" value={user.Password}
                      onChange={handleInput} autoCorrect="off"
                      className="py-3 my-2 w-100  bg-transparent border-0 border-bottom"
                    />
                  </div>
                  <div className=" px-1 my-5 text-center">
                    <input
                      type="submit"
                      className="py-3 my-2 w-100 rounded-2 bg_1"
                      onClick={postdata} 
                    />
                  </div>
                </form>
                <div className=" px-1 text-center">
                  <div className="">
                    Dont have a account?
                    <NavLink
                      to="/signup"
                      className="text-decoration-none text-light"
                    >
                      create ⬈
                    </NavLink>
                  </div>
                </div>
              </div>
        
            <div className="col-md-6 col-12">
   
  
  <div className="text-center info1">
 <img src={javas} alt="ifwafcon" />
  </div>
  <div className="text-start info1">
 <img src={angulars}  alt="icfawfon" />
  </div>
  <div className="text-end info1">
 <img src={sqls} alt="fawf"  />
  </div>
  <div className="text-center info1">
 <img src={cplus} alt="icfwafon" />
  </div>
</div>
            </div>
          </div>
         
</>


)}








export default Signin;