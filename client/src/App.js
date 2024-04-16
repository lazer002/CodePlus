import React from "react";

import Home from './components/home'
import About from './components/about'
import Courses from './components/courses'
import Contect from './components/contect'
import Signup from './components/signup'
import Signin from './components/signin'
import Header from './components/header'
import Footer from './components/footer'
import Userpanel from './components/Userpanel.jsx'
import "./index.css";




import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
return(
<>

<BrowserRouter>
<Header/>


<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/courses" element={<Courses/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/contect" element={<Contect/>} ></Route>
<Route path="/signin" element={<Signin/>} ></Route>
<Route path="/userpanel" element={<Userpanel/>} ></Route>


</Routes>
<Footer />

</BrowserRouter>


        </>
    )
}
export default App;