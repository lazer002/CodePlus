import "../index.css";
import fs from "./images/fs.png";
import meeting from "./images/meeting.png";

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
import angulars from "./images/6s.png";
import sqls from "./images/7s.png";
import htmls from "./images/8s.png";
import javas from "./images/9s.png";
import phps from "./images/10s.png";
import jquerys from "./images/11s.png";
import bootstraps from "./images/12s.png";
import androids from "./images/13s.png";
import { NavLink } from "react-router-dom";

function Courses() {
  return (
    <>
    <div className="backround">
      <div className="container p-5 rounded-4">
        <div className="center my-4">
          <ul
            className="nav nav-pills p-2 rounded-4"
            id="mytab"
          >
            <li className="nav-item ">
              <a className="nav-link active text-light" data-bs-toggle="pill" href="#All">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" data-bs-toggle="pill" href="#PROGRAMMING">
                PROGRAMMING
              </a>
            </li>
            <li className="">
              <a className="nav-link text-light" data-bs-toggle="pill" href="#DESIGNING">
                DESIGNING
              </a>
            </li>
            <li className="">
              {" "}
              <a className="nav-link text-light" data-bs-toggle="pill" href="#WEB">
                WEB DEVELOPMENT
              </a>
            </li>
            <li className="">
              <a className="nav-link text-light" data-bs-toggle="pill" href="#DATA">
                DATA ANALYSIS
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          <div className="tab-pane fade show active" id="All">
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 p-4">
          
                  <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={android} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Android</div>
                    </div>
                  </div>
       
              </div>
              <div className="col-lg-3  col-sm-6 p-4">
               <div className="card text-light bg-transparent border-0 shadow hover ">
                    <div className="card-body">
                      <img src={bootstrap} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Bootstrap</div>
                    </div>
                  </div>
    
              </div>
              <div className="col-lg-3 col-sm-6 p-4">
  
                  <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={jquery} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Jquery</div>
                    </div>
                  </div>
 
              </div>
              <div className="col-lg-3 col-sm-6 p-4">
     
                  <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={php} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Php</div>
                    </div>
                  </div>
      
              </div>
              <div className="col-lg-3 col-sm-6 p-4">
   
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={java} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Java Core</div>
                    </div>
                  </div>

              </div>
              <div className="col-lg-3 col-sm-6 p-4">
         
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={html} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">HTML5 </div>
                    </div>
                  </div>
        
              </div>
              <div className="col-lg-3 col-sm-6 p-4">
       
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={sql} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Mysql</div>
                    </div>
                  </div>
         
              </div>
              <div className="col-lg-3 col-sm-6 p-4">
  
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={angular} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Angular </div>
                    </div>
                  </div>
         
              </div>
              <div className="col-lg-3 col-sm-6 p-4">
  
  <div className="card text-light bg-transparent border-0 shadow hover">
        <div className="card-body">
          <img src={python} className="img-fluid" alt="meeting" />
        </div>
        <div className="card-footer border-0">
          <div className="fw-semi-light">Python</div>
        </div>
      </div>

  </div>
  <div className="col-lg-3 col-sm-6 p-4">
  
  <div className="card text-light bg-transparent border-0 shadow hover">
        <div className="card-body">
          <img src={cplus} className="img-fluid" alt="meeting" />
        </div>
        <div className="card-footer border-0">
          <div className="fw-semi-light">C++ </div>
        </div>
      </div>

  </div>
  <div className="col-lg-3 col-sm-6 p-4">
  
  <div className="card text-light bg-transparent border-0 shadow hover">
        <div className="card-body">
          <img src={c} className="img-fluid" alt="meeting" />
        </div>
        <div className="card-footer border-0">
          <div className="fw-semi-light">C Programming</div>
        </div>
      </div>

  </div>
  <div className="col-lg-3 col-sm-6 p-4">
  
  <div className="card text-light bg-transparent border-0 shadow hover">
        <div className="card-body">
          <img src={web} className="img-fluid" alt="meeting" />
        </div>
        <div className="card-footer border-0">
          <div className="fw-semi-light">Web Designing</div>
        </div>
      </div>

  </div>
  <div className="col-lg-3 col-sm-6 p-4">
  
  <div className="card text-light bg-transparent border-0 shadow hover">
        <div className="card-body">
          <img src={digital} className="img-fluid" alt="meeting" />
        </div>
        <div className="card-footer border-0">
          <div className="fw-semi-light">Digital Marketing</div>
        </div>
      </div>

  </div>
              
            </div>
          </div>
          <div className="tab-pane fade" id="PROGRAMMING">
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 p-4">
   
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={web} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Full Stack Dev</div>
                    </div>
                  </div>
     
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
    
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={java} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">JavaScript</div>
                    </div>
                  </div>
     
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
   
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={android} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Android </div>
                    </div>
                  </div>
    
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
     
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={php} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Php </div>
                    </div>
                  </div>
        
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="DESIGNING">
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 p-4">
       
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={digital} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Ui/Ux</div>
                    </div>
                  </div>
        
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
       
             <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={web} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Web Designing</div>
                    </div>
                  </div>
      
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="WEB">
            <div className="row text-center">
              <div className="col-lg-3  col-sm-6  p-4">
        
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={html} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Html5</div>
                    </div>
                  </div>
        
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
    
             <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body">
                      <img src={angular} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Angular</div>
                    </div>
                  </div>
            
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
       
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body text-center">
                      <img src={digital} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">FullStack Dev</div>
                    </div>
                  </div>
            
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
          
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body text-center">
                      <img src={bootstrap} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Bootstrap</div>
                    </div>
                  </div>
           
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="DATA">
            <div className="row">
              <div className="col-lg-3  col-sm-6  p-4">
        
              <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body text-center">
                      <img src={sql} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Mysql</div>
                    </div>
                  </div>
           
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
       
             <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body text-center">
                      <img src={php} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Php </div>
                    </div>
                  </div>
            
              </div>
              <div className="col-lg-3  col-sm-6  p-4">
       
                  <div className="card text-light bg-transparent border-0 shadow hover">
                    <div className="card-body text-center">
                      <img src={python} className="img-fluid" alt="meeting" />
                    </div>
                    <div className="card-footer border-0">
                      <div className="fw-semi-light">Python </div>
                    </div>
                  </div>
           
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      </div>

      
      <div className="container backround py-5 my-5 h-100">
        <div className="row justify-content-center">
          <h1 className="text-center">WHAT POPULAR IN CODE+</h1>

          <div className="col-xxl-4  col-sm-6 col-12 p-5">
            <div className="card p-3 border-0 info1 shadow">
              <div className="card-body text-center">
                <img src={webs} className="py-2" alt="meeting" />
                <h4>Full Stack Dev</h4>
                <p>
                  Complete MERN Stack Express.js & Node.js. Discover APIs,
                  templating{" "}
                </p>
                <a href="" className="text-decoration-none">
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-4  col-sm-6 col-12  p-5 ">
            <div className="card p-3 border-0 shadow info1">
              <div className="card-body">
                <img src={sqls} className="py-2" alt="meeting" />
                <h4>Data Analysis</h4>
                <p>
                  {" "}
                  SQL Training by industry specialists, our SQL training program
                  covers essential to propel level of SQL{" "}
                </p>
                <a href="" className="text-decoration-none">
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-sm-6  col-12 p-5 ">
            <div className="card p-3 border-0 shadow info1">
              <div className="card-body">
                <img src={digitals} className="py-2" alt="meeting" />
                <h4>Designing</h4>
                <p>
                  UI/UX designing course is most demanding technology & much
                  more.{" "}
                </p>
                <a href="" className="text-decoration-none">
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid backround">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-xl-6 colo">
              <div className="display-4 fw-semi-bold px-5 my-3">
                <i> What Upcoming Courses in Code+</i>
                <div className=" info1 icon3 p-5">
              <img src={android} className="img-fluid" />
            </div>
              </div>
              <p></p>
            </div>
            <div className="col-xl-6">
              <div className="row justify-content-center text-center">
                <div className="col-sm-5 col-12 mt-5 ms-5 ps-5">
                  <div className="card p-3 border-0 shadow info1">
                    <div className="card-body">
                      <img src={javas} className="py-2" alt="meeting" />
                      <h4>Full Stack Dev</h4>
                      <p>
                        Complete MERN Stack Express.js & Node.js. Discover APIs,
                        templating{" "}
                      </p>
                      <a href="" className="text-decoration-none">
                        Read more{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-5 col-12 ">
                  <div className="card p-3 border-0 shadow info1">
                    <div className="card-body">
                      <img src={phps} className="py-2" alt="meeting" />
                      <h4>Full Stack Dev</h4>
                      <p>
                        Complete MERN Stack Express.js & Node.js. Discover APIs,
                        templating{" "}
                      </p>
                      <a href="" className="text-decoration-none">
                        Read more{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center text-center">
                <div className="col-sm-5 col-12 me-5">
                  <div className="card p-3 border-0 shadow info1">
                    <div className="card-body">
                      <img src={jquerys} className="py-2" alt="meeting" />
                      <h4>Full Stack Dev</h4>
                      <p>
                        Complete MERN Stack Express.js & Node.js. Discover APIs,
                        templating{" "}
                      </p>
                      <a href="" className="text-decoration-none">
                        Read more{" "}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-12 mt-5">
                  <div className="card p-3 border-0 shadow info1">
                    <div className="card-body">
                      <img src={cs} className="py-2" alt="meeting" />
                      <h4>Full Stack Dev</h4>
                      <p>
                        Complete MERN Stack Express.js & Node.js. Discover APIs,
                        templating{" "}
                      </p>
                      <a href="" className="text-decoration-none">
                        Read more{" "}
                      </a>
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
          <div className="col-lg-3 col-md-6 col-sm-12 p-3 shadow hover">
            <h1>10000 +</h1>
            <h6>STUDENT</h6>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-3 shadow hover">
            <h1>20 +</h1>
            <h6>AWARDS</h6>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-3 shadow hover">
            <h1>50 +</h1>
            <h6>COMPANY</h6>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-3 shadow hover">
            <h1>22 +</h1>
            <h6>YEAR OF EXPERIENCE</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
