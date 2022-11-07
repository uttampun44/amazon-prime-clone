import React from 'react'
import './sass/Main.css'
import Watch from "../images/watchanywhere.png";
import Download from "../images/download.png";
import Servers from "../images/server.png";
import Footer from '../Footer/Footer';
function Main() {
  return (
    <div className='hero-section'>
       <main>
            <div className='amazon-prime-heading'>
                <div className='amazon-heading'>
                <h1>Welcome to Prime Video</h1>
                <p>Enjoy exclusive Amazon Originals as well as popular movies and TV shows.Join Prime Video now for USD 5.99 per month. Cancel anytime.
                </p>
                </div>

                <div className='video-member'>
                 <a href='#'><span>Prime Video Member? Sign In</span></a>
                 <div className='or'>
                 <span></span><p>or</p><span></span>
                 </div>
                  <a href='#'><span>Start Your Free Trail*</span></a>
                  <p id='membership'>Membership renews at USD 5.99/month.</p>
                 </div>
                 
                </div>

                <section className='offer'>
                   <div className='offer-section'>
                      
                   <div className='watch-anywhere'>
                      <img src={Watch} alt=''/>
                      <h1>Watch anywhere</h1>
                      <p>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.</p>
                   </div>

                   <div className='download'>
                   <img src={Download} alt='' />
                   <h1>Download and go</h1>
                   <p>Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.</p>
                   </div>

                   <div className='server'>
                   <img src={Servers} alt=''/>
                   <h1>Data saver</h1>
                   <p>Control data usage while downloading and watching videos on select phones or tablets.</p>
                   </div>

                   </div>
                </section>
        </main>
        <Footer />
    </div>
  )
}

export default Main;
