import React, { useState } from 'react'
import Account from '../Create Account/Account.module.css';
import Primelogo from '../images/primevideo-login.png';
import InfoIcon from '@mui/icons-material/Info';

function Createaccount(props) {
   const [formdata, setForm] = useState({
    yourname: '',
    email: '',
    password: '',
    repassword: ''
   });

  const img = {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  }

const formInput = (e) =>{
  setForm({...formdata, [e.target.name]: e.target.value});
  console.log(formdata);
}
  const formSubmit = (e) => {
   setForm({yourname: '', email: '', password: '', repassword: '' });
   if(formdata.password != formdata.repassword){
    alert('Password are not matching');
   }else{
     alert("form submit successfull");
     e.preventDefault();
   }
  }
  return (
    <div className={Account.createaccount}>
        <img src={Primelogo} alt='' style={img}/>
        <div className={Account.heading}>
         <h2>Create account</h2>
           <div className={Account.form}>
            
           <form onSubmit={formSubmit}>
              <div className={Account.labelandinput}>
               <label htmlFor='yourname'>Your name</label>
               <br></br>
               <input type='text' name='yourname' autoComplete='off' onChange={formInput} value={formdata.name} required/>
               <br></br>
               <label htmlFor='email'>Email</label>
               <br></br>
               <input type='email' name='email' autoComplete='off'  onChange={formInput} value={formdata.email} required/>
               <br></br>
               <label htmlFor='password'>Password</label>
               <br></br>
               <input type='password' placeholder='At least 6 characters' id='password' name='password' autoComplete='off'  onChange={formInput} value={formdata.password} required/>
               <br></br>
              <div className={Account.alert}>
              <InfoIcon  htmlcolor='red'/><span>
              Passwords must be at least 6 characters.</span>
              </div>
              <label htmlFor='repassword'>Re-enter password</label>
              <br></br>
              <input type='password' name='repassword' autoComplete='off'  onChange={formInput} value={formdata.repassword} required/>

               <div className={Account.create}>
                
                  <button type='submit'> Create your Amazon account</button>
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

      <div className={Account.footer}>
      <div className={Account.footerchild}>
     
       <span><a href='#'>Terms and Privacy Notice</a></span> <span><a href='#'>Send us Feedback</a></span> <span><a href='#'>Help</a></span>
      </div>
      <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      
   </div>
</div>
  )
}

export default Createaccount
