import img1 from "./img/Kinfolk-7.jpg"
import img2 from "./img/oakhurst-porchfest2.jpg"
import img3 from "./img/replacements2.jpg"
import img4 from "./img/bing-porchfest.png"
import img5 from "./img/Okahurst-2019.jpg"




const HomePage = () => {

    return (
      <div>
        <div className="homepage" id="homepage">
            <div className="homepage-hero">
                <h2>
                    Introducing:
                </h2>
                <h1>
                    Porchfest in the Wedge
                </h1>
            </div>


      <div class="page-content">

          
          <div className="half-flex padded-container">
            <div>
              <div className="white-box">
                <div className="golden-flex">
                  <div className="gold-left"><h2>What?</h2></div>
                  <div className="gold-right">
                    <h3>A neighborhood music festival that's free and fun for all ages</h3>
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
                    <h3>Porches, yards, and driveways throughout the Wedge</h3>
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
              <p>  It provides an opportunity to explore the Wedge in an intimate and novel way. Attendees can
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
              <p>The Wedge has a history of diversity, creativity, and community. It is both a 
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
        </div>
        </div>
      </div>
        
    );
  };
  
  export default HomePage;