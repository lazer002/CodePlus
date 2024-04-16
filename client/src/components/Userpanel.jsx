
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Account from "./images/profile.png";
import axios from 'axios'

function Userpanel() {
  axios.defaults.withCredentials=true

  // const navigate = useNavigate()
  const [userdata, setUserData] = useState({})
  useEffect(() => {
       axios.get("http://localhost:8484/userpanel")
      .then(res=>{
        setUserData(res.data.user)})
       
      .catch(err=>console.log(err))
    },[]);

  return (
    <>


      <div className="container mt-5 p-3 border rounded-2">
        <div className="row">
          <div className="col-3">
            <div className="border rounded-3 text-center">
              <div className="card border-0 " >
                <img src={Account} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{userdata.Username}</h4>
                  <p className="card-text">Always Ready To Code</p>
                  <a href="/" className="btn btn-outline-light mb-3">Edit Profile</a>


                </div>
              </div>
            </div>
          </div>

          <div className="col-9 text-light">
            <div className="border rounded-3 text-center">
              <div className="container courses">

                <div className="courses_nav my-4">
                  <ul className="nav nav-pills p-2 " id="mytab">
                    <li className="nav-item ">
                      <a className="nav-link active text-light" data-bs-toggle="pill" href="#aa">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light" data-bs-toggle="pill" href="#bb">
                        Courses
                      </a>
                    </li>
                    <li className="">
                      <a className="nav-link text-light" data-bs-toggle="pill" href="#cc">
                        Fee
                      </a>
                    </li>

                  </ul>
                </div>

                <div className="tab-content">
                  <div className="tab-pane fade show active" id="aa">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 p-4">
                        <table>
                          <thead>      
                            <tr>
                            <th> <h1>Name</h1></th>
                            <th> <h1>Email</h1></th>
                            <th>  <h1>Phone number</h1></th>
                          </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> {userdata.Username}</td>
                              <td> {userdata.Email}</td>
                              <td>  {userdata.Phone_number}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="bb">
                    <div className="row">
                      <div className=" p-4">
                        <h1>courses</h1><input type="text" />
                      </div>

                    </div>
                  </div>

                  <div className="tab-pane fade" id="cc">
                    <div className="row">
                      <div className="p-4">
                        {/* <h1>{userdata.message}</h1> */}
                      </div>

                    </div>
                  </div>


                </div>
              </div>
            </div>





          </div>
        </div>
      </div>


    </>)
}




export default Userpanel;