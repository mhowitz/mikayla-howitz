import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
// import Resume from './components/Resume';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"


function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if(currentPage=== 'Home') {
      return 
    }
    if(currentPage === 'About'){
      return <About />
    } 
    if(currentPage === 'Projects'){
      return <Projects />
    }
    if(currentPage=== 'Contact') {
      return <Contact />
    }
  }

  const pageChange = (page) => setCurrentPage(page);
  return (
    <div className="main">
 
    <div className='hero is-transparent is-fullheight'>

      <div className='hero-head'> 
     <Nav currentPage={currentPage} pageChange={pageChange}></Nav>
     
     </div>
      <div className="hero-body">
        {renderPage()}
  
      </div>
      <div className="hero-foot">
      <nav className="tabs ">
    <div className="container">
   
   <ul className='is-justify-content-center is-justify-content-space-around'>
    <li>      <a href="https://github.com/mhowitz">
      <FontAwesomeIcon icon={faGithub} className="icon is-large has-text-light iconHover" />
      </a></li>
      <li>
      <a href="https://www.linkedin.com/in/mikayla-howitz-143338181">
      <FontAwesomeIcon icon={faLinkedin} className="is-size-1 has-text-light iconHover" />
      </a>
      </li>
      <li>
      <a href= "mailto: mikaylahowitz@gmail.com">
      <FontAwesomeIcon icon={faEnvelope} className="is-size-1 has-text-light iconHover"/>
      </a>
      </li>
   </ul>
     
    </div>
</nav>
      </div>
      
    </div>

    <Footer></Footer>

 
    </div>
  );
}

export default App;
