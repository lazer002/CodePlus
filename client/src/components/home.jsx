import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../index.css";
import axios from 'axios'
import banner1 from "./images/a.png";
import banner2 from "./images/b.png";
import banner3 from "./images/c.png";
import banner4 from "./images/d.png";
import ama from "./images/ama.png";
import microsoft from "./images/microsoft.png";
import zomato from "./images/zomato.png";
import google from "./images/google.png";
import go from "./images/go.png";
import info from "./images/info.png";
import swiggy from "./images/swiggy.png";
import logi from "./images/logi.png";

import cplus from "./images/1.png";
import digital from "./images/2.png";
import c from "./images/3.png";
import python from "./images/4.png";
import web from "./images/5.png";
import angular from "./images/6.png";
import sql from "./images/7.png";
import html from "./images/8.png";
import java from "./images/9.png";
import php from "./images/10.png";
import jquery from "./images/11.png";
import bootstrap from "./images/12.png";
import android from "./images/13.png";

import cpluss from "./images/1s.png";
import digitals from "./images/2s.png";
import cs from "./images/3s.png";
import pythons from "./images/4s.png";
import webs from "./images/5s.png";
import sqls from "./images/7s.png";
import htmls from "./images/8s.png";
import javas from "./images/9s.png";
import phps from "./images/10s.png";
import jquerys from "./images/11s.png";
import bootstraps from "./images/12s.png";
import androids from "./images/13s.png";
import ReactCardCarousel from 'react-card-carousel';
import Card from "./card";



function Home({crs_img,crs_name}) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Username: '', Email: '', Phone_number: '', subject: '', message: ''
  })
  let name, value;
  const handleInput = (e) => {

    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const postdata = async (e) => {
    e.preventDefault()

    try {
      const ress = await axios.post("/contect", user);
      console.log("Response Status:", ress.status);

      if (ress.status === 422) {
        console.log("Navigating to /signin");
        navigate("/signin");
      } else {
        console.log("Navigating to /jfiowjafjwaofjw");
        navigate('/jfiowjafjwaofjw');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }




  return (
    <>

      <div className="container backround my-5 py-5 hover" >
        <div className="row ">
          <div className="col-md-6 p-3">
            <div className="info1 icon1 p-5">
              <img src={htmls} className="img-fluid" alt="Icon" />
            </div>

            <div className="display-3 fw-semi-bold py-2">Code+</div>
            <div className="display-6 fw-semi-bold py-2">
              Best Courses are waiting to enrich your skill
            </div>
            <div className=" info1 icon2 p-5">
              <img src={javas} className="img-fluid" alt="Icon" />
            </div>

            <div className="fw-semi-bold py-2 fs-4">
              We are dedicated to teaching individuals of all skill levels the
              skills needed to excel in the world of programming.
            </div>
            <div className=" info1 icon1 p-5">
              <img src={c} className="img-fluid" alt="Icon" />
            </div>

            <div className=" info1 icon5 p-5">
              <img src={html} className="w-25" alt="Icon" />
            </div>

          </div>
          <div className="col-md-6 p-5">


            <div
              id="carouselExampleRide"
              className="carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="info1 icon4 p-5">
                <img src={html} className="img-fluid" alt="Icon" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                  <img
                    src={banner1}
                    className="d-block w-100 rounded-5"
                    alt="bannerfw"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner2}
                    className="d-block w-100 rounded-5"
                    alt="bannerfwf"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner3}
                    className="d-block w-100 rounded-5"
                    alt="bannerfwff"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner4}
                    className="d-block w-100 rounded-5"
                    alt="bannerfwa"
                  />
                </div>
              </div>
              <div className=" info1 icon3 p-5">
                <img src={androids} className="img-fluid" alt="Icon" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container px-5 backround mb-5 hover ">
        <div className="container-fluid h-80">
          <div className="row">
            <div className=" info1 icon3 p-5">
              <img src={bootstraps} className="img-fluid" alt="Icon" />
            </div>

            <div className="col-12 ">
              <div className="display-6 fw-semi-bold py-2">
                start your journey towards a successful <br /> career in the
                tech industry!
              </div>
           
              <button className="btn btn-outline-light px-5 my-3">
                Enroll Now
              </button>
          
            </div>


            
          </div>
          
          <div className="icon2  info1">
              <img src={html} className="img-fluid w-50" alt="Icon" />
            </div>
            <div className="carousel_course ">



              <ReactCardCarousel autoplay={true} autoplay_speed={2500}>

              <Card crs_img={android} crs_name='ANDROID' />
              <Card crs_img={c} crs_name='C LANGUAGE' />
              <Card crs_img={python} crs_name='PYTHON' />
              <Card crs_img={web} crs_name='WEB DESIGNING' />
              <Card crs_img={digital} crs_name='DIGITAL MARKETING' />
              <Card crs_img={cplus} crs_name='C++' />
              <Card crs_img={angular} crs_name='ANGULAR' />
              <Card crs_img={sql} crs_name='SQL' />
              <Card crs_img={html} crs_name='HTML5' />
              <Card crs_img={java} crs_name='JAVA' />
              <Card crs_img={php} crs_name='PHP' />
              <Card crs_img={bootstrap} crs_name='BOOTSTRAP' />
              <Card crs_img={jquery} crs_name='JQUERY' />

              </ReactCardCarousel>



            </div>
          </div>
        </div>





      <div className="container-fluid  py-5 bg_1">

        <div className="container">

          <div className="row  justify-content-center">
            <div className=" info1 icon3 p-5">
              <img src={bootstraps} className="img-fluid" alt="Icon" />
            </div>
            <div className="col-lg-6">
              <div className="display-4 fw-semi-bolder pb-4">
                <i> Our previous students are selected in</i>
              </div>
              <p className="fs-5 fw-semi-bold">
                Here at CODE+ we have tie-ups with various software
                organizations. Our job oriented courses and their curriculum
                includes interview prepration classes.
              </p>
              <div className=" info1 icon1 p-5">
                    <img src={cplus} className="img-fluid" alt="Icon" />
                  </div>
            </div>
            <div className="col-lg-6 brands">
              <div className="row justify-content-center">
                <div className="col-4 brand_w ">
                  <img src={microsoft} alt="amazone" className="img-fluid shadow " />
                </div>
              </div>
              <div className="row">
                <div className="col-4 amazone ">
                  <img src={ama} alt="amazone" className="img-fluid shadow hover" />
                  <div className=" info1 icon4 p-5">
                    <img src={android} className="img-fluid " alt="Icon" />
                  </div>
                </div>

                <div className="col-4 brand_w">
                  <div>
                    <img src={zomato} alt="amazone" className=" img-fluid shadow hover" />
                    <img src={google} alt="amazone" className=" img-fluid shadow hover" />
                  </div>

                  <img src={google} alt="amazone" className=" img-fluid shadow hover" />
                </div>

                <div className="col-4 brand_w">
                  <img src={go} alt="amazone" className=" img-fluid shadow hover" />

                  <img src={info} alt="amazone" className=" img-fluid mx-5 shadow hover" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-4 brand_w">
                  <img src={logi} alt="amazone" className="img-fluid shadow hover" />
                </div>

                <div className="col-4 amazone">
                  <img src={swiggy} alt="amazone" className=" img-fluid shadow hover" />
                </div>
              </div>

              <div className="row justify-content-center ">
                <div className="col-4 brand_w my-3 p-3 shadow1 hover">
                  <h5 className="ms-3 ">+ many more</h5>
               
                </div>
            
              </div>
             
            </div>
            
          </div>
        </div>

      </div>




      <div className="container backround my-5  ">
        <div className="row ">
          <h1 className="text-center">WHAT POPULAR IN CODE+</h1>

          <div className="col-lg-4  p-5 ">
            <div className="card bg text-light ">
              <div className="card-body text-center">
                <img src={digitals} className="" alt="meeting" />
              </div>
              <div className="card-footer border-0">
                <ul className="course_card" style={{ listStyle: "none" }}>
                  <li>the process of planning</li>
                  <li> conceptualizing, and implementing</li>
                  <li>functional and offers a good user experience</li>
                  <li>User experience is central to the web designing process</li>
                  <li> various techniques, tools and programming languages</li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4  p-5 ">
            <div className="card bg text-light">
              <div className="card-body text-center">
                <img src={webs} className="" alt="meeting" />
              </div>
              <div className="card-footer border-0">
                <ul className="course_card" style={{ listStyle: "none" }}>
                  <li>Complete Frontend Development</li>
                  <li>Complete Backend Development</li>
                  <li>Complete Database - SQL & MongoDB</li>
                  <li>Complete MERN Stack</li>
                  <li>Real Life and Industry Grade Projects</li>
                  <li>resume, freelance, open source & more</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4  p-5 ">
            <div className="card bg  text-light">
              <div className="card-body text-center">
                <img src={androids} className="" alt="meeting" />
              </div>
              <div className="card-footer border-0">
                <ul className="course_card" style={{ listStyle: "none" }}>
                  <li>Linux kernel</li>
                  <li>Android Runtime</li>
                  <li>Setup of Android Development environment</li>
                  <li>Android Application Fundamentals</li>
                  <li>Main Building Blocks</li>
                  <li>User Interface</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container backround my-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-5 ">
              <span className="my-3 display-5 fw-semi-bold">WHAT'S NEW?</span>
              <p className="pb-5 ">
                Our experience tells us that students on average are 3 times
                more
                <br /> serious in apaid batch. The completion of course and
                watch time of <br /> students increases exponentially.
              </p>
              <button className="btn btn-outline-light px-5 my-3">
                Enroll Now
              </button>
            </div>

            <div className="col-lg-6 p-5">

              <div className=" info1 icon4 p-5">
                <img src={pythons} className="img-fluid" alt="Icon" />
              </div>
              <div className=" info1 icon3 p-5">
                <img src={android} className="img-fluid" alt="Icon" />
              </div>


              <div className=" info1 icon1 p-5">
                <img src={phps} className="img-fluid" alt="Icon" />
              </div>

            </div>
            <div className=" info1 icon1 p-5">
              <img src={cs} className="img-fluid" alt="Icon" />
            </div>
            <div className=" info1 icon2 p-5">
              <img src={jquerys} className="img-fluid" alt="Icon" />
            </div>
            <div className=" info1 icon6 p-5">
              <img src={cpluss} className="img-fluid" alt="Icon" />
            </div>
            <div className=" info1 icon7 p-5">
              <img src={sqls} className="img-fluid" alt="Icon" />
            </div>

          </div>
        </div>
      </div>


      <div className="container backround my-5 hover">
        {/* <video preload loop autoPlay src={V} type="video/mp4"  className='img-fluid'/> */}
        <div className="row">

          <div className="col-md-6 p-3 order-2">
            <div className="h2 fw-semi-bold py-2">We are a Coding Academy</div>
            <div className="display-6  fw-semi-bold py-2">
              start your journey towards a successful career in the tech
              industry!
            </div>
            <div className=" info1 icon1 p-5">
              <img src={sqls} className="img-fluid" alt="Icon" />
            </div>
            <div className="py-2">
              Our classes are taught by industry experts who have real-world
              experience in the field. They will guide you through the learning
              process, providing hands-on instruction and one-on-one support.
              Whether you're a beginner just starting out or an experienced
              developer looking to expand your skillset, we have a class that's
              right for you.
            </div>
            <button className="btn hover btn-outline-light px-5 my-3  text-light">
              Enroll Now
            </button>
            <div className=" info1 icon2 p-5">
              <img src={androids} className="img-fluid" alt="Icon" />
            </div>
          </div>
          <div className="col-md-6 p-5  order-1">
            <div className=" info1 icon6 p-5">
              <img src={cpluss} className="img-fluid" alt="Icon" />
            </div>
            <div
              id="carouselExampleRide"
              className="carousel-fade"
              data-bs-ride="carousel"
            >
              <div className=" info1 icon7 p-5">
                <img src={pythons} className="img-fluid" alt="Icon" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                  <img src={banner1} className="d-block w-100" alt="bannerfw" />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner2}
                    className="d-block w-100"
                    alt="bannerfwf"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner3}
                    className="d-block w-100"
                    alt="bannerfwff"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner4}
                    className="d-block w-100"
                    alt="bannerfwa"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid bg_1">

        <div className="container position-relative ">

          <div className="row">

            <div className="col-12 mt-5">

              <div className="display-4 fw-semi-bold">
                start your journey towards a successful <br /> career in the
                tech industry!
              </div>

              <button className="btn btn-outline-dark px-5 my-3 text-light hover">Enroll Now</button>
            </div>

          </div>
          <div className="col-12 contect_form">
            <div className="row justify-content-end">
              <div className="col-xl-7  col-lg-6 ">
                <div className="info1 icon1 p-5">
                  <img src={web} className="img-fluid" alt="Icon" />
                </div>

                <div className=" info1 icon1 p-5">
                  <img src={phps} className="img-fluid" alt="Icon" />
                </div>


                <div className=" info1 icon2 p-5">
                  <img src={cs} className="img-fluid" alt="Icon" />
                </div>
           
                <div className=" info1 icon4 p-5">
                  <img src={cpluss} className="img-fluid" alt="Icon" />
                </div>
                <div className=" info1 icon6 p-5">
                  <img src={sqls} className="img-fluid" alt="Icon" />
                </div>

                <div className=" info1 icon5 p-1">
                  <img src={jquerys} className="img-fluid" alt="Icon" />
                </div>


              </div>
              <div className="col-xl-5 col-lg-6 ">
                <div className="form_main border rounded-4 p-4 hover">
                  <h1 className="">Get in Touch</h1>
                  <p>We Want To Hear From You</p>
                  <form method="post" action="/contect">
                    <div className=" d-flex justify-content-between">
                      <input
                        type="text"
                        name="Username"
                        className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                        placeholder="Name"
                        autoCorrect="off"
                        value={user.Username}
                        onChange={handleInput}
                      />
                      <input
                        type="text"
                        name="Email"
                        className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                        placeholder="Email"
                        autoCorrect="off"
                        value={user.Email}
                        onChange={handleInput}
                      />
                      <input
                        type="text"
                        name="Phone_number"
                        className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                        placeholder="tel"
                        autoCorrect="off"
                        value={user.Phone_number}
                        onChange={handleInput}
                      />
                    </div>
                    <div className=" p-3">
                      <input
                        type="text"
                        name="subject"
                        className="  py-4 rounded-4 w-100 bg text-light h5"
                        placeholder="Subject"
                        autoCorrect="off"
                        value={user.subject}
                        onChange={handleInput}
                      />
                    </div>
                    <div className=" p-3">
                      <input
                        type="text"
                        name="message"
                        className="  py-5 rounded-4 w-100 bg text-light h5"
                        placeholder="Leave us a message..."
                        autoCorrect="off"
                        value={user.message}
                        onChange={handleInput}
                      />
                    </div>
                    <div className=" p-3">

                      <input type="submit" className=" bg w-100 py-3 rounded-4  text-light h5" name="submit" onClick={postdata} />
                    </div>
                  </form>
                </div>
              </div>





            </div>
          </div>
        </div>

      </div>




    </>
  );
}


export default Home;
