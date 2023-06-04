import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import './App.css';
import React , {useState}  from 'react';
import Home from './compenent/Home';
import About from './compenent/About';
import Skills from './compenent/Skills';
import Contact from './compenent/Contact';
import Project from './compenent/Project';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';

function App() {
     const [click,setClick] = useState(false);
     const handClick = () => setClick(!click)
  return (
    <div className="container">
        <BrowserRouter>
          <div className="header">
            <Link style={{textDecoration:"none",zIndex:4}} to="/">
                 <h2 className="logo">karimmaarouf</h2>
            </Link>
          <ul className={click ? "nav active" : "nav"}>
              <a><Link to={"/"}>home</Link></a>
              <a><Link  to={"/compenent/about"}>about</Link></a>
              <a><Link to={"/compenent/contact"}>contact</Link></a>
              <a><Link  to={"/compenent/skills"}>skills</Link></a> 
              <a><Link  to={"/compenent/project"}>projects</Link></a>      
          </ul>
          <div className="humburger" onClick={handClick}>
            {
              click ? ( <FaBars size={30} style={{color:"#fff"}} />) : (  <FaTimes size={30} style={{color:"#fff"}} />)
            }
             
            
          </div>
          </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compenent/contact" element={<Contact />} />
              <Route path="/compenent/about" element={<About />} />
              <Route path="/compenent/skills" element={<Skills />} />
              <Route path="/compenent/project" element={<Project />} />
            </Routes>
          </BrowserRouter>
          <div className="footer">
                © Karimmaarouf 2020
          </div>
    </div>
  );
}
export default App;