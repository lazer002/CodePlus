import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import "../index.css";

import t1 from "./images/t1.png";
import t2 from "./images/t2.png";
import t3 from "./images/t3.png";
import t4 from "./images/t4.png";
import t5 from "./images/t5.png";
import t6 from "./images/t6.png";
import web from "./images/8.png";
import phps from "./images/10s.png";
import cs from "./images/3s.png";
import jquerys from "./images/11s.png";
import sqls from "./images/7s.png";
import cpluss from "./images/1s.png";



function Contect(){
  const navigate = useNavigate();
//   const [userData,setUserData]=useState({Username:'',Email:'',Phone_number:'',subject:'',message:'',
// });
//   const contectdata = async() => {
//       try{
          
//       const res=await  fetch('/contect',{
//           method:"GET",
//           headers:{
//               Accept:"application/json",
//               "Content-Type":"application/json"
//           },
//           credentials:"include"
//       });
//       const data=await res.json();
//       console.log(data);
//       setUserData(data);
//       if(!res.status===200)
//       {
//         const error=new Error(res.error);
//         throw error;
//       }
//   }catch(err){
//   console.log(err);
//   navigate('/signin')
//   } 
//   }
  
//   useEffect(()=>
//   {
//     contectdata();
//   },
//   []);
  
 
// let name,value;
// const handleInput=(e)=>{
//     console.log(e)
//     name=e.target.name;
//     value=e.target.value;
//     setUserData({...userData,[name]:value})
// } 

// const contactform=async(e)=>{
//     e.preventDefault()
//     const {Username,Email,Phone_number,subject,message}=userData

//     const res=await fetch("/contect",{
// method:"post",
// headers:{

//     "content-type":"application/json" 
// },
// body:JSON.stringify({
//     Username,Email,Phone_number,subject,message})

//     });

// const data=await res.json()
// if(!data){
// console.log("message not send") 

// }
// else{window.alert("message send")
// setUserData({...userData,message:""})
// }}











  
return(
<>











<div className="container section py-5 my-5 h-100">
        <div className="row justify-content-center">
          <h1 className="text-center">WHAT POPULAR IN CODE+</h1>

          <div className="col-xxl-4  col-sm-6 col-12 p-5">
            <div className="card p-3 border-0 hover backround">
              <div className="card-body">
                <img src={t1} className="py-2" alt="meeting" />
                <h4>Full Stack Dev</h4>
                <p>Complete MERN Stack Express.js & Node.js. Discover APIs, templating </p>
                <a href="" className="text-decoration-none">Read more </a> 
              </div>
             
            </div>
          </div>
          <div className="col-xxl-4  col-sm-6 col-12  p-5 ">
            <div className="card p-3 border-0 hover backround">
              <div className="card-body">
                <img src={t2} className="py-2" alt="meeting" />
                <h4>Data Analysis</h4>
                <p> SQL Training by industry specialists, our SQL training program covers essential to propel level of SQL </p>
                <a href="" className="text-decoration-none">Read more </a> 
              </div>
             
            </div>
          </div>
          <div className="col-xxl-4 col-sm-6  col-12 p-5 ">
            <div className="card p-3 border-0 hover backround">
              <div className="card-body">
                <img src={t3} className="py-2" alt="meeting" />
                <h4>Designing</h4>
                <p>UI/UX designing course is most demanding technology & much more. </p>
                <a href="" className="text-decoration-none">Read more </a> 
              </div>
             
            </div>
          </div>
        </div>
</div>


<div className="container-fluid backround">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-lg-6 ">
              <div className="display-4 fw-semi-bold px-5 my-3">
                <i> What People Saying About Us</i>
              </div>
              <div className="info1 icon1 p-5">
              <img src={web} className="img-fluid" />
            </div>
            
            <div className=" info1 icon1 p-5">
              <img src={phps} className="img-fluid" />
            </div>
          
        
           <div className=" info1 icon2 p-5">
              <img src={cs} className="img-fluid" />
            </div>
            <div className=" info1 icon7 p-5">
              <img src={jquerys} className="img-fluid" />
            </div>
            <div className=" info1 icon4 p-5">
              <img src={cpluss} className="img-fluid" />
            </div>
            <div className=" info1 icon6 p-5">
              <img src={sqls} className="img-fluid" />
            </div>
            </div>
            <div className="col-lg-6">
                <div className="row justify-content-center">

                <div className="col-sm-5 col-12 mt-5 ms-5 ps-5 ">
                <div className="card p-3 border-0 bg info1">
              <div className="card-body">
                <img src={t2} className="py-2" alt="meeting" />
                <h4>Laxmi Thakur</h4>
                <p>I am really satisfied to learn at CODE+, as I complete my Summer Training programming with project under guidence of best faculty. </p>
               
                </div>
             
                 </div>
                </div>

                <div className="col-sm-5 col-12 ">
                <div className="card p-3 border-0 bg info1">
              <div className="card-body">
                <img src={t3} className="py-2" alt="meeting" />
                <h4>Rahul Singh</h4>
                <p>I'm very impressed with the CODE+ faculty teaching way. They have offered me Extra classes for all my technical problems.Thanks!! CODE+ </p>
            
                </div>
             
                 </div>
                </div>
                </div>
                <div className="row justify-content-center">

                <div className="col-sm-5 col-12 me-5 ">
                <div className="card p-3 border-0 bg info1">
              <div className="card-body">
                <img src={t4} className="py-2" alt="meeting" />
                <h4>Rohit Sharma</h4>
                <p>I Thanks to CODE+ which offers me placement with PHP Training. The PHP Trainer is very expert in Open sources. </p>
            
                </div>
             
                 </div>
                </div>

                <div className="col-sm-6 col-12 mt-5">
                <div className="card p-3 border-0 bg info1">
              <div className="card-body">
                <img src={t5} className="py-2" alt="meeting" />
                <h4>Ajay</h4>
                <p>I'm impressed with the level of CODE+'s java Training. The Trainer is very good and have offered me Extra classes for all my technical problems. </p>
          
                </div>
             
                 </div>
                </div>


                </div>


             
                
            </div>


          </div>
        </div>
</div>


<div className="container p-5  my-5">
        <div className="row p-5 border text-center backround my-5">
          <div className="col-lg-3 col-md-6 col-sm-12 p-3 shadow">
            <h1>10000 +</h1>
            <h6>STUDENT</h6>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-3 shadow">
            <h1>20 +</h1>
            <h6>AWARDS</h6>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-3 shadow">
            <h1>50 +</h1>
            <h6>COMPANY</h6>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-3 shadow">
            <h1>22 +</h1>
            <h6>YEAR OF EXPERIENCE</h6>
          </div>
        </div>
      </div>

<div className="container-fluid backround hover">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <div className="contect_body">
                <div className="display-4 fw-semi-bold">
                  start your journey towards a successful <br /> career in the
                  tech industry!
                </div>
               
                <button className="btn bg px-5 my-3 text-light">Enroll Now</button>
              </div>
            </div>
            <div className="col-12 contect_form">
              <div className="row justify-content-end">
              <div className="col-sm-4">   
                <div className="info1 icon1 p-5">
              <img src={web} className="img-fluid" />
            </div>
            
            <div className=" info1 icon1 p-5">
              <img src={phps} className="img-fluid" />
            </div>
          
        
           <div className=" info1 icon2 p-5">
              <img src={cs} className="img-fluid" />
            </div>
            <div className=" info1 icon3 p-5">
              <img src={jquerys} className="img-fluid" />
            </div>
            <div className=" info1 icon4 p-5">
              <img src={cpluss} className="img-fluid" />
            </div>
            <div className=" info1 icon6 p-5">
              <img src={sqls} className="img-fluid" />
            </div>




            </div>
                <div className="col-xl-5 col-lg-6 col-sm-8 col-12  hover ">
                  <div className="form_main border rounded-4 p-4">
                    <h1 className="">Get in Touch</h1>
                    <p>We Want To Hear From You</p>
                    <form method="post" >
                      <div className=" d-flex justify-content-between">
                        <input
                          type="text"
                          name="Username"
                          className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                          placeholder="Name"
                         autoCorrect="off"
                        />
                        <input
                          type="text"
                          name="Email"
                          className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                          placeholder="Email"
                        autoCorrect="off"

                        />
                        <input
                          type="text"
                          name="Phone_number"
                          className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                          placeholder="tel"
                        autoCorrect="off"

                        />
                      </div>
                      <div className=" p-3">
                        <input
                          type="text"
                          name="subject"
                          className="  py-4 rounded-4 w-100 bg text-light h5"
                          placeholder="Subject"
                         autoCorrect="off"

                        />
                      </div>
                      <div className=" p-3">
                        <input
                          type="text"
                          name="message"
                          className="  py-5 rounded-4 w-100 bg text-light h5"
                          placeholder="Leave us a message..."
                          autoCorrect="off"

                        />
                      </div>
                      <div className=" p-3">
                        {/* <button className="btn bg w-100 py-3 rounded-4  text-light h5" type="submit" name="submit">Sumbit Query</button> */}
                        <input type="submit" className=" bg w-100 py-3 rounded-4  text-light h5"  name="submit"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






















</>



)}

export default Contect;
