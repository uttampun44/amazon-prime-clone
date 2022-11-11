import React, { useState } from 'react'
import './Sass/Navbar.css'
import logo from '../images/Amazon-Prime-Video-logo.png';
import {Link} from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Main from '../Main/Main'
// import { display, style } from '@mui/system';

function Navbar() {
  const [click, setClick] = useState(true);
  const linkcolors = {
    color: 'rgba(242,244,246, 0.9)',
    fontSize: '1rem',
    fontWeight: '700',
    textDecoration: 'none' 
   }

   const Dropdown = (e) =>{
    setClick(current => !current)
   }
  return (
    <div className='Navbar'>
        <nav>
             <div className='nav'>
                <div  className='logo-div'>
               <a href='/'><img src={logo} alt=""/></a> 
                 </div>

                 <div className='globe-icon-section'>
               
                 <div className='language-icon'>
                <a href='#home' onClick={Dropdown}><LanguageIcon htmlColor='rgba(242,244,246,.9)'/>
                </a> 
                  <span><a href='english.com' id='en'> EN</a></span>
                 <ExpandMoreIcon style={{transform: click? 'rotate(360deg)' : 'rotate(180deg)'}} htmlColor='#8197a4'/>
               </div>

               <div className='sign-in'>
                   <Link to="/signup" style={linkcolors}>Sign In</Link>
               </div>
                    </div>
                 
                    </div>
        </nav>
      <Main />

      
      <div className='language' style={{display: click? 'none' : 'grid'}}>
      <div className='language-first'>
             <ul>
                   <li><a href='movie'>Bahasa Indonesia</a></li>
                   <li><a href='movie'>Bahasa Melayu</a></li>
                   <li><a href='movie'>Dansk</a></li>
                   <li><a href='movie'>Deutsch</a></li>
                   <li><a href='movie'>English</a></li>
                   <li><a href='movie'>Español</a></li>
                   <li><a href='movie'>Français</a></li>
                   <li><a href='movie'>Italiano</a></li>
                   <li><a href='movie'>Magyar</a></li>
                   <li><a href='movie'>Nederlands</a></li>
                   <li><a href='movie'>Norsk</a></li>
              </ul>
      </div>
      
      <div className='language-second'>
          <ul>
            <li><a href='movie'>Polski</a></li>
            <li><a href='movie'>Português (Brasil)</a></li>
            <li><a href='movie'>Português (Portugal)</a></li>
            <li><a href='movie'>Română</a></li>
            <li><a href='movie'>Suomi</a></li>
            <li><a href='movie'>Svenska</a></li>
            <li><a href='movie'>Türkçe</a></li>
            <li><a href='movie'>Wikang Filipino</a></li>
            <li><a href='movie'>Čeština</a></li>
            <li><a href='movie'>Ελληνικά</a></li>
            <li><a href='movie'>Русский</a></li>
          </ul>
        </div>

        <div className='language-third'>
           <ul>
               <li><a href='movie.com'>עברית</a></li>
               <li><a href='movie.com'>العربية</a></li>
               <li><a href='movie.com'>हिन्दी</a></li>
               <li><a href='movie.com'>தமிழ்</a></li>
               <li><a href='movie.com'>తెలుగు</a></li>
               <li><a href='movie.com'>ไทย</a></li>
               <li><a href='movie.com'>日本語</a></li>
               <li><a href='movie.com'>简体中文</a></li>
               <li><a href='movie.com'>繁體中文</a></li>
               <li><a href='movie.com'>한국어</a></li>
            </ul>
         </div>
       </div>
  
  
       </div>  
  )
}

export default Navbar
