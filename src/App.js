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
              <a><Link to={"/"} target="_blank">home</Link></a>
              <a><Link  to={"/compenent/about"} target="_blank">about</Link></a>
              <a><Link to={"/compenent/contact"} target="_blank">contact</Link></a>
              <a><Link  to={"/compenent/skills"} target="_blank">skills</Link></a> 
              <a><Link  to={"/compenent/project"} target="_blank">projects</Link></a>      
          </ul>
          <div className="humburger" onClick={handClick}>
            {
              click ? ( <FaTimes size={30} style={{color:"#fff"}} />) : (  <FaBars size={30} style={{color:"#fff"}} />)
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
