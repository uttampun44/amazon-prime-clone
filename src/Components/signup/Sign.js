import React, { useState } from 'react'
import './sass/sign.css';
import Primelogo from '../images/primevideo-login.png';
import { Link } from 'react-router-dom';
function Sign() {
   
  return (
    <div className='sigup-section'>
    <img src={Primelogo}/>
        <div className='form-sign-in'>
             
         <div className='form'>
               <h2>Sign In</h2>
               <form>
                   <label>Email or mobile phone number</label>
                   <br></br>
                   <input type="text"/>
                   <br></br>
                   <div className='password'>
                    
                   <div className='pass'>
                    <label id='password'>Password</label><label id='password'><a href='#'>Forgot your password</a></label>
                    </div>
                    <input type="password"/>
                    <br></br>
                    <input type='submit' id='submit'/>

                    <div className='privacy-notice'>
                       <span>By continuing, you agree to the Amazon <a href='https://www.primevideo.com/ww-av-legal-home/ref=av_auth_te'>Conditions of Use and Privacy Notice</a></span>
                    </div>
                    
                    <div className='keep-me'>
                    <input type='checkbox'/><label>Keep me sign in. <a href='# '>Details</a></label>
                    </div>

                    <div className='name'>
                       <span id='line-amazon'></span><span>New to Amazon ?</span><span id='line-amazon'></span>
                    </div>
                     <br></br>
                    <Link to='/createaccount' id='link'> <a id='createaccount' >Create your Amazon account</a></Link>

                    </div>
   
               </form>
             
               </div>
        
           </div>
    </div>
  )
}
export default Sign;