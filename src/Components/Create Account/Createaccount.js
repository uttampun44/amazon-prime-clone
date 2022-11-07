import React from 'react'
import Account from '../Create Account/Account.module.css';
import Primelogo from '../images/primevideo-login.png';
import InfoIcon from '@mui/icons-material/Info';

function Createaccount(props) {
  const img = {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  }
  return (
    <div className={Account.createaccount}>
        <img src={Primelogo} alt='' style={img}/>
        <div className={Account.heading}>
         <h2>Create account</h2>
           <div className={Account.form}>
            
           <form method='post'>
              <div className={Account.labelandinput}>
               <label>Your name</label>
               <br></br>
               <input type='text' />
               <br></br>
               <label>Email</label>
               <br></br>
               <input type='email' />
               <br></br>
               <label>Password</label>
               <br></br>
               <input type='password' placeholder='At least 6 characters' id='password'/>
               <br></br>
              <div className={Account.alert}>
              <InfoIcon  htmlcolor='red'/><span>
              Passwords must be at least 6 characters.</span>
              </div>
              <label>Re-enter password</label>
              <br></br>
              <input type='password' />

               <div className={Account.create}>
                <a href='#'>Create your Amazon account</a>
               </div>

               <div className={Account.termsofuse}>
                <p>By creating an account, you agree to the Amazon</p>
                <a href='#'>Conditions of Use and Privacy Notice.</a>
               </div>

               <div className={Account.alreadyaccount}>
                  <span>Already have an account?</span> &nbsp; <a href="#">Sign in</a>
               </div>
           </div>
           
            </form>
           </div>
           
      </div>
</div>
  )
}

export default Createaccount
