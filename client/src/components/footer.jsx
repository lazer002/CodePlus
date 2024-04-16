
import "../index.css";
import React,{useState} from "react"
// import {  useNavigate } from "react-router-dom";

function Footer() {
// const navigate = useNavigate()
const [user1,setUser1]=useState({
  newsemail:""

})
let name,value;
const newsinput = (e)=>{
  console.log(e)
  name=e.target.name;
  value=e.target.value;
  setUser1({...user1,[name]:value})
}
const postinput = async (e)=>{
  e.preventDefault()
  const{newsemail}=user1
  const res = await fetch("/news",{
    method:"post",
    headers:{
      "content-type":"application/json" 

    },
    body:JSON.stringify({
      newsemail
    })
  })
const data = await res.json()
if(data.status === 422 || !data){
  window.alert("invalid email")
}
else{window.alert("message send ")}

}


  return (<>
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#2d1151" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,58.7C480,53,600,75,720,96C840,117,960,139,1080,133.3C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>   */}
<div className="container-fluid footer mt-5">

<div className="row hover">


<div className="col-12 text-center py-5 mb-5">

<div className="display-4 my-3">Subscribe Our Newsletter</div>
<div className="">
  <form method="post">
  <input type="email" name="newsemail" value={user1.newsemail} onChange={newsinput} autoCorrect="off" className="w-25 py-2 rounded-3" />
<input type="submit" name="submit" onClick={postinput} className="btn btn-outline-light py-2 px-5 mb-1 text-center"/>
</form>
</div>
</div>
<div className="col-12">
<div className="row">
<div className="col-md-3 p-3 ">

<ul style={{ listStyle: "none" }}>
            <li>logo</li>
            <li className="h4">
              We are India's Most Loved Coding Community. Join us!
            </li>
          </ul>
          </div>

        <div className="col-md-3 p-3 ">
          <ul style={{ listStyle: "none" }}>
            <li>
              <h1>HELPFUL LINKS</h1>
            </li>
            <li>Courses</li>
            <li>Privacy policy</li>
            <li>REFUND & CANCELLATION POLICY</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </div>

        <div className="col-md-3 p-3 text-decoration-none">
          <ul style={{ listStyle: "none" }}>
            <li>
              <h1>GET IN TOUCH</h1>
            </li>
            <li><a href="mailto:ajlazer002@gmail.com" className=" text-decoration-none text-light">zoro@gmail.com </a> </li>
            <li><a href="mailto:ajlazer002@gmail.com" className=" text-decoration-none text-light">zoro.urban@gmail.com </a></li>
            <li><a href="mailto:ajlazer002@gmail.com" className="text-decoration-none text-light">zoro.pc@gmail.com </a></li>
            <li><a href="mailto:ajlazer002@gmail.com" className="text-decoration-none text-light">zoro.drink@gmail.com </a></li>
          </ul>
        </div>

        <div className="col-md-3 p-3 ">
          <ul style={{ listStyle: "none" }}>
            <li>
              <h1>CONNECT WITH US</h1>
            </li>
            <li>Facebook</li>
            <li>Twitter </li>
            <li>Youtube </li>
            <li>Instagram</li>
          </ul>




</div>



</div>
</div>
<div className="text-center">Copyright © 2023</div>
</div>
</div>


</>

  );
}


export default Footer ;