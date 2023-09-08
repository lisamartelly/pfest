import img1 from "./img/Kinfolk-7.jpg"
import img3 from "./img/replacements2.jpg"
import img4 from "./img/bing-porchfest.png"
import wrecktangleLogo from "./img/WTP-LOGO.png"
import ctsLogo from "./img/cts-logo.jpg"
import redCowLogo from "./img/redcowlogo.png"
import ugPrintingLogo from "./img/Underground_Printing_Logo.png"
import upDownLogo from "./img/updownlogo.png"
import upsLogo from "./img/ups-store-logo.jpg"
import fireAndNiceLogo from "./img/70710logo.png"
import mapPdf from "./resources/Porchfest-Map-Color.pdf"


import './HomePage.css';


const countDownDate = new Date("Aug 19, 2023 12:00:00").getDate();
const now = new Date().getDate();
const daysAway = countDownDate - now;


const HomePage = () => {

    return (
      <div>
        <div className="homepage" id="homepage">
            <div className="homepage-hero">
                <h2>
                    Introducing:
                </h2>
                <h1>
                    Uptown Porchfest
                </h1>
            </div>


      <div className="page-content">
        <div className="padded-container">
          <div className="homepage-info-banner">
            <h2>Porchfest was AWESOME!</h2>
            <p>That went better than we could have possibly imagined!!! Thank you so much to the bands, hosts, volunteers, and local sponsors who made it possible. You were all amazing.</p>
            <p>We are already so excited for next year. If you have ideas for improvements or enhancements, please email them to us! uptownporchfest@gmail.com or <b><a target="_blank" rel="noreferrer" href="https://forms.gle/4rKCPgBQFtTxxaJF7">fill out this short form</a></b> </p>
          </div>
        </div>
        

          
          <div className="half-flex padded-container">
            <div>
              <div className="white-box">
                <div className="golden-flex">
                  <div className="gold-left"><h2>What?</h2></div>
                  <div className="gold-right">
                    <h3>A free and fun neighborhood music festival</h3>
                  </div>
                </div>
                
                <div className="golden-flex">
                  <div className="gold-left"><h2>When?</h2></div>
                  <div className="gold-right">
                    <h3 style={{marginBottom:0}}>August 19, 2023</h3>
                    <h3 style={{marginTop:0}}>1pm - 5pm</h3>
                  </div>
                </div>
               

                <div className="golden-flex">
                  <div className="gold-left"><h2>Where?</h2></div>
                  <div className="gold-right">
                    <h3 className="left-justify">Porches, yards, and driveways throughout the Wedge neighborhood of Uptown, Minneapolis</h3>
                  </div>
                </div>
                <div className="centered">
                  <div className="" style={{marginRight : 20}}>
                    <a href="/for-bands" className="ctaPrimary">Band Signup</a>
                  </div>

                  <div >
                    <a href="/for-hosts" className="ctaPrimary">Porch Signup</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="home-image-half">
                <img src = {img4} alt="pfest" id="img1" className="fancy-img"/>
            </div>
          </div>

          <div className="half-flex padded-container">
            <div className="home-image-half">
                <img src = {img1} alt="pfest" id="img2" className="fancy-img"/>
            </div>

            <div className="neon-box">
            <h2>Porch-WHAT?</h2>
              <p>
                Porchfest will feature <b>multiple, spread-out, overlapping concerts during a single afternoon</b> that attendees can enjoy while 
                wandering the neighborhood.
              </p>
              <div class="divider div-transparent div-dot"></div>
              <p>  It provides an opportunity to explore the Wedge neighborhood of Uptown in an intimate and novel way. Attendees can
                discover new musicians, support local businesses, and celebrate the diverse, eclectic history 
                of this neighborhood. 
              </p>
              <div className="centered">
                  <div className="" style={{marginRight : 20}}>
                    <a href="/bands" className="ctaPrimary">Who's Playing</a>
                  </div>

                  <div >
                    <a href="/faq" className="ctaPrimary">FAQ</a>
                  </div>
                </div>
            </div>
            

          </div>

          <div className="half-flex padded-container">
            <div className="white-box">
              <h2>A Musical Mainstay</h2>
              <p>Countless musicians have found their footing in this neighborhood.</p>
              <p>Uptown has a history of diversity, creativity, and community. It is both a 
                destination and a home for artists and those that appreciate them. 
              </p>
              <p>
                The Replacements (famously pictured here at their <a href="https://popturf.com/locations/music/the-replacements/the-stinson-house">home</a> in the Wedge) got their start here, Rhymesayers was rooted here for decades, and
                musical shoutouts from Prince (and countless others) highlight the true fashion of Uptown as a place where anybody can be themselves and find support and community along the way. 

              </p>

              <div className="centered">
                  <div className="" style={{marginRight : 20}}>
                    <a href="/for-bands" className="ctaPrimary">Band Signup</a>
                  </div>

                  <div >
                    <a href="/for-hosts" className="ctaPrimary">Porch Signup</a>
                  </div>
                </div>

            </div>
            <div className="home-image-half">
                <img src = {img3} alt="pfest" id="img3" className="fancy-img"/>
            </div>
          </div>

          <div className="padded-container" style={{marginTop : 30}}>
           <h2>Thank you to our Sponsors!</h2>
           <p>That's right, we got sponsors! These local businesses generously supported this event through in-kind donations, services, thank-you's for bands and hosts, 
            and funds towards permits and logistics. We are grateful to have them in our community!</p>
            <div className="sponsorImages">
              <a href="https://wrecktanglepizza.com/"><img className="sponsorImage" src = {wrecktangleLogo} alt="wrecktangle logo" id="wrecktangleLogo"/></a>
              <a href="https://www.instagram.com/calltheshotsproduction/"><img className="sponsorImage" src = {ctsLogo} alt="call the shots Logo" id="ctsLogo"/></a>
              <a href="https://redcowmn.com/minneapolis-uptown/"><img className="sponsorImage" src = {redCowLogo} alt="red cow logo" id="redCowLogo"/></a>
              <a href="https://undergroundshirts.com/pages/custom-t-shirt-printing-minneapolis-mn"><img className="sponsorImage" src = {ugPrintingLogo} alt="underground printing logo" id="ugPrintingLogo"/></a>
              <a href="https://www.updownarcadebar.com/minneapolis/"><img className="sponsorImage" src = {upDownLogo} alt="updown logo" id="upDownLogo"/></a>
              <a href="https://locations.theupsstore.com/mn/minneapolis/2801-hennepin-ave-s"><img className="sponsorImage" src = {upsLogo} alt="ups store logo" id="upsLogo"/></a>
              <a href="https://www.fireandnicemn.com/"><img className="sponsorImage" src = {fireAndNiceLogo} alt="fire and nice logo" id="fireAndNiceLogo"/></a>

            </div>

          </div>
        </div>
        </div>
      </div>
        
    );
  };
  
  export default HomePage;