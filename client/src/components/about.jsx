import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import "../index.css";
import t1 from "./images/t1.png";
import t2 from "./images/t2.png";
import t3 from "./images/t3.png";
import t4 from "./images/t4.png";
import t5 from "./images/t5.png";
import t6 from "./images/t6.png";



function About(){
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
<div className="container-fluid backround my-5 py-5 hover">
<div className="container my-5 py-5">
<div className="row">
<div className="col-12 display-4 border-bottom text-center py-3">About Us</div>
<div className="p-3">
<p>CODE+ is a Famous IT Training Institute in delhi. In terms of computer education and training CODE+ is known for excellence in quality and for consistently delivering result. CODE+ does'nt provide only computer knowledge, it develop personality as well. CODE+ offers Industrial and Summer Training in JAVA, Oracle, PHP/MYSQL, ASP.net, Web Designing, Graphic Designing for B.tech, MCA, BCA, B.E. students. Here, students get knowledge about computer programming and trainings through IT experts,we provide guideline as well so that students can take right decision for their carrier. CODE+ offers professional and specialised IT Training in Delhi.</p>


<p>We want to create interaction between qualified students and IT industry. Our purpose is that students will be able to secure their career in IT industry as well as we want to provide qualified and amibitions students to the IT-Industry.</p>


<p>Training at CODE+ is designed in a very project oriented way. From the start of the course we keep in mind that the student should not only be given the conceptual or theoretical knowledge but also the practical knowledge. Not only this, a student is prepared to face the interview on the completion of the course by giving them interview handling tips as well as clear all concepts.</p>


</div>

</div>
</div>
</div>



<div className="container section py-5 my-5  backround hover">
        <div className="row justify-content-center text-center">
          <span className="text-center display-6 fw-semi-bold">OUR TELENTED MEMBER IN CODE+</span>

          <div className="col-xxl-4  col-sm-6 col-12 p-5">
            <div className="card p-3 border-0 shadow">
              <div className="card-body">
                <img src={t1} className="py-2" alt="meeting" />
                <h4>Full Stack Experts</h4>
                <p>10 years of experience in IT industry</p>
                <a href="" className="text-decoration-none">Read more </a> 
              </div>
             
            </div>
          </div>
          <div className="col-xxl-4  col-sm-6 col-12  p-5 ">
            <div className="card p-3 border-0 shadow hover">
              <div className="card-body">
                <img src={t4} className="py-2" alt="meeting" />
                <h4>Data Analysis Experts</h4>
                <p> Coached newly-hired IT specialists on advanced technical procedures.</p>
                <a href="" className="text-decoration-none">Read more </a> 
              </div>
             
            </div>
          </div>
          <div className="col-xxl-4 col-sm-6  col-12 p-5 ">
            <div className="card p-3 border-0 shadow hover">
              <div className="card-body">
                <img src={t6} className="py-2" alt="meeting" /> 
                <h4>Designing Experts</h4>
                <p>10 years of experience in IT industry</p>
                <a href="" className="text-decoration-none">Read more </a> 
              </div>
             
            </div>
          </div>
        </div>
</div>



<div className="container-fluid hover contect_us">
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
                <div className="col-xl-5 col-lg-6 col-sm-8 col-12  form_body ">
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

export default About;
