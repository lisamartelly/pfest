import img1 from "./img/another-porchfest.jpg";
import img2 from "./img/oakhurst-porchfest.jpg";
import img3 from "./img/philly-porchfest.png";
import img4 from "./img/oakhurst-porchfest3.jpg";




const ForBands = () => {

    return (
      <div>
        <div className="band-hero half-flex">
          <h1>
            Calling all Local Musicians!
          </h1>
              
        </div>
        <div className="for-bands-banner">
          <h2 >Applications to play in 2024 Porchfest will be open April 1 - June 1. We can't wait to hear from you!</h2>
        </div>
        <div className="padded-container">
          <div className="half-flex">
            <div className="neon-box" >
                <h2>Picture this:</h2>
                <p>
                It's a summer day, there's a nice breeze, <b>you're playing with your band in front of a crowd of local supporters</b>, helping to forge connections in a pocket of the city <b>where great music has been born.</b> This is Porchfest.
                </p>
                
                <div class="divider div-transparent div-dot"></div>
                <p>
                We'd like to showcase local bands across all genres, and harness the power of art to build community and bridge cultural barriers. Most importantly, it won't be possible without you.
                </p>
                

                <div className="centered">
                  <div className="" style={{marginRight : 20}}>
                    <a className="ctaPrimary" rel="noreferrer" target="_blank">Apply to play - Apr 1</a>
                  </div>

                  <div >
                    <a href="https://forms.gle/yvXUSaUVUsw2gYUGA" rel="noreferrer" target="_blank" className="ctaPrimary">Request more info</a>
                  </div>
                </div>
              </div>
              <div className>
                <img src = {img1} alt="pfest" id="img1" className="fancy-img" />
              </div>
          </div>

          <div className="three-flex" style={{marginTop: 24, marginBottom: 24}}>
            <div className="three-row-image" id="first-image" style={{backgroundImage: `url(${img3})`}}>
            </div>
            <div className="three-row-image" id="second-image" style={{backgroundImage: `url(${img2})`}}>
            </div>
            <div className="three-row-image" id="third-image" style={{backgroundImage: `url(${img4})`}}>
            </div>

          </div>



          <div>
            <div className>

                <div className="white-box" style={{marginTop: 35}}>
                  <div style={{margin: 'auto'}}>
                    <h2>More details: </h2>
                    <p>
                    <p>
                      At Porchfest, bands will be scattered throughout the Wedge neighborhood of Uptown playing overlapping concerts on porches, in yards, wherever they fit. Attendees will wander the neighborhood listening to your music. 
                      Our goal is to help connect Minnesotans to local bands while putting on an awesome event that celebrates the liveliness and cultural richness of Uptown.
                    </p>
                    </p>
                    <h3>How to get involved:</h3>
                    <ul className="x">
                      <li>Click the button below to inquire via form, or just email uptownporchfest@gmail.com</li>
                      <li>Keep an eye out for an email containing your Porchfest details!</li>
                    </ul>
                  </div>
                <div>
                  <p>
                  Bands will be assigned a porch as well as a timeslot between <b>1pm - 5pm on August 17th.</b> Bands are <b>responsible for bringing their own equipment.</b>                </p>
                  <p>
                  As an entirely volunteer-organized, grassroots event, we do not have funding to pay bands directly.  Bands are highly encouraged to have a spot for tips (signage will be provided as well), sell merch, and advertise future events they'll be playing at. 
                  </p>
                  
                </div>

                <div className="centered">
                  <div className="" style={{marginRight : 20}}>
                    <a className="ctaPrimary" rel="noreferrer" target="_blank">Apply to Play - Apr 1</a>
                  </div>

                  <div >
                    <a href="mailto:uptownporchfest@gmail.com" rel="noreferrer" target="_blank" className="ctaPrimary">Email Us</a>
                  </div>
                </div>
            
                </div>

            </div>
          </div>
        </div>

          
          
         
      </div>
        
    );
  };
  
  export default ForBands;