
import { Link } from 'react-router-dom';

const FAQ = () => {

    return (
      <div>
        <div className="padded-container faq-container">

          <div class="half-flex odd-row">
            <div className="white-box">
              <h2>
                  Cost to attend?
              </h2>
              <ul className="x">
                <li>Admission is completely free!!</li>
                <li>Something to note: this event is entirely powered by volunteer efforts, including the music. 
                  If you're able, we encourage tipping our artists to thank them for sharing their talents with us </li>
              </ul>
            </div>

            <div className="neon-box">
              <h2>
                  Where's the Wedge?
              </h2>
              <ul className="x">
                <li>The Wedge is a <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Lowry+Hill+East,+Minneapolis,+MN/@44.9580604,-93.3105666,14z/data=!3m1!4b1!4m6!3m5!1s0x52b332d309da28a9:0x292cf36fc48caaf!8m2!3d44.9555767!4d-93.2918753!16zL20vMDZjMTlo">
                  neighborhood</a> in Uptown, Minneapolis, MN also known as Lowry Hill East. 
                  It's bordered by Hennepin Ave on the Left, Lyndale on the right, Lake on the bottom and ~Franklin on the top.</li>
              </ul>
            </div>
          </div>

          <div class="half-flex even-row">
            <div className="neon-box">
              <h2>
                  What if it rains?
              </h2>
              <ul className="x">
                <li>This event will go on given light/passing-rain or drizzle! If it's terrible, dangerous, torrential rain, we may pivot to a rain date of Sunday, Aug 18. Check back for info in that case.</li>
              </ul>
            </div>

            <div className="white-box">
              <h2>
                  What's the format of this event?
              </h2>
              <ul className="x">
                <li>Porchfest will feature multiple, spread-out, overlapping concerts during a single afternoon that 
                  attendees can enjoy while wandering the neighborhood.</li>
              </ul>
            </div>
          </div>

          <div class="half-flex odd-row">
            <div className="white-box">
              <h2>
                  How can I get involved?
              </h2>
              <ul className="x">
                <li>This event can't happen without musicians and porches! Please sign up to <Link to="/for-hosts">host</Link> or <Link to="/for-bands">play</Link> if you have either of those things going for you.</li>
                <li>Day-of volunteers are also appreciated! Please email <a href="mailto:uptownporchfest@gmail.com">uptownporchfest@gmail.com</a> if you're interested in helping.</li>
              </ul>
            </div>

            <div className="neon-box">
              <h2>
                  Where are bathrooms?
              </h2>
              <ul className="x">
                <li>
                  Mueller park has 4 dedicated indoor bathroom stalls. There will also be portapotties stationed at the park for extra access. 
                </li>
              </ul>
            </div>
          </div>

          <div class="half-flex even-row">
            <div className="neon-box">
              <h2>
                What's there to eat and drink?              
              </h2>
              <ul className="x">
                <li>The Wedge is surrounded by tons of amazing local businesses! Pop in anywhere that looks appetizing.
                  Attendees are also encouraged to pack snacks and drinks for themselves and maybe even to share with neighbors as they'd like.
                  There will also be a few food trucks and beverage stations at Mueller park. Make sure to check it out!
                </li>
              </ul>
            </div>
            
            <div className="white-box">
              <h2>
                  Where can I park?
              </h2>
              <ul className="x">
                <li>The Wedge is a very dense neighborhood and street parking is notoriously sparse. 
                  Attendees are <b>highly</b> encouraged to take public transit (the 21, 17, 6, 4, and 2 bus lines all touch the Wedge) bike (the greenway cuts right through us!), walk, rideshare, carpool, etc!</li>
              </ul>
            </div>

          </div>
          

        </div>
      </div>
        
    );
  };
  
  export default FAQ;