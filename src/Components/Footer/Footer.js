import React from 'react'
import Footerlogo from '../images/footerlogo.png';
import '../Footer/sass/footer.css'
function Footer() {
  return (
    <div className='footers'>
       <footer>
         <div className='footer-logo'>
           <div className='footerlogo'>
           <img src={Footerlogo} alt=''/>
           </div>
           
           <div className='terms-and-privacy'>
            <span><a href='#terms'>Terms and Privacy Notice</a></span>
            <span><a href='#send'>Send us feedback</a></span>
            <span><a href='#help'>Help</a></span>
           </div>

           <div className='privacy'>
           <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
           </div>

         </div>
       </footer>
    </div>
  )
}

export default Footer
