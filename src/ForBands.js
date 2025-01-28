import img1 from "./img/another-porchfest.jpg";
import img2 from "./img/oakhurst-porchfest.jpg";
import img3 from "./img/philly-porchfest.png";
import img4 from "./img/oakhurst-porchfest3.jpg";

const ForBands = () => {
  return (
    <div>
      {/* <div className="band-hero half-flex">
          <h1>
            Calling all Local Musicians!
          </h1>
              
        </div> */}
      {/* <div className="for-bands-banner">
          <h2 >Applications to play in 2024 Porchfest will be open April 1 - June 1. We can't wait to hear from you!</h2>
        </div> */}
      <div className="padded-container">
        <div className="half-flex">
          <div className="neon-box">
            <h2>Picture this:</h2>
            <p>
              It's a summer day, there's a nice breeze,{" "}
              <b>
                you're playing with your band in front of a crowd of local
                supporters
              </b>
              , helping to forge connections in a pocket of the city{" "}
              <b>where great music has been born.</b> This is Porchfest.
            </p>

            <div class="divider div-dot"></div>
            <p>
              We will do our best to accommodate as many bands as possible and
              are so grateful for the enthusiasm for this event - we feel it
              too!{" "}
              <b>
                Please read below for important information on how to get
                involved.
              </b>
            </p>

            <div className="centered">
              <div className="" style={{ marginRight: 20 }}>
                <a
                  className="ctaPrimary"
                  rel="noreferrer"
                  // target="_blank"
                  href="#"
                >
                  Apply to Play - Available April 1
                </a>
              </div>

              {/* <div>
                <a
                  href="https://forms.gle/yvXUSaUVUsw2gYUGA"
                  rel="noreferrer"
                  target="_blank"
                  className="ctaPrimary"
                >
                  Download Band Guide TO DO
                </a>
              </div> */}
            </div>
          </div>
          <div className>
            <img src={img1} alt="pfest" id="img1" className="fancy-img" />
          </div>
        </div>

        <div className="three-flex" style={{ marginTop: 24, marginBottom: 24 }}>
          <div
            className="three-row-image"
            id="first-image"
            style={{ backgroundImage: `url(${img3})` }}
          ></div>
          <div
            className="three-row-image"
            id="second-image"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <div
            className="three-row-image"
            id="third-image"
            style={{ backgroundImage: `url(${img4})` }}
          ></div>
        </div>

        <div>
          <div className>
            <div className="white-box" style={{ marginTop: 35 }}>
              <div style={{ margin: "auto" }}>
                <h2>DETAILS: </h2>
                <p>
                  {/* <p>
                    At Porchfest, bands will be scattered throughout the Wedge
                    neighborhood of Uptown playing overlapping concerts on
                    porches, in yards, wherever they fit. Attendees will wander
                    the neighborhood listening to your music. Our goal is to
                    help connect Minnesotans to local bands while putting on an
                    awesome event that celebrates the liveliness and cultural
                    richness of Uptown.
                  </p> */}
                  <p>
                    <b></b>
                  </p>
                </p>
                <h3>The gist:</h3>
                <ul className="x">
                  <li>
                    Apply to play via the form on this website between April 1
                    and June 1
                  </li>
                  <li>
                    Watch for an email containing your application decision
                    around June 15
                  </li>
                  <li>
                    If selected as a Porchfest band, you will be assigned and
                    connected to your porch by July 16
                  </li>
                  <li>
                    Bands are{" "}
                    <b>responsible for bringing their own equipment.</b>
                  </li>
                </ul>
                <h2>FAQ:</h2>
                <h3>How do applications work?</h3>
                <ul className="x">
                  <li>
                    The ONLY way to apply is via our application google form.
                    This gathers a ton of information we need to list your band
                    on our website and connect you with your host.{" "}
                  </li>
                  <li>
                    Applications are not on a rolling basis! We will assess
                    everyone after the application window closes. So please take
                    your time filling the application out! If you throw together
                    a bio and want to change it later, for example, we cannot
                    guarantee that we will be able to do that, and things like
                    that can eat up a lot of time.{" "}
                  </li>
                  <li>
                    Please do not email us application-y emails. We need all
                    applications to go through the form to keep everything in
                    one place.{" "}
                  </li>
                  <li>
                    Applications will typically be open for two months, from
                    April 1 - May 31
                  </li>
                </ul>
                <h3>When will I find out if I'm in?</h3>
                <ul className="x">
                  <li>
                    We hope to send out acceptances around June 15, but it might
                    be later than that. Please be patient! We get a lot of
                    interest in the event and we want to be fair to everyone
                  </li>
                  <li>
                    Since applications are open until June 1, you will
                    definitely not hear back anytime before then, even if you
                    were the first person to apply
                  </li>
                </ul>
                <h3>When will I know my porch/where/when I'm playing?</h3>
                <ul className="x">
                  <li>
                    We aim to have everyone assigned and connected to their
                    porch by July 15, roughly one month before the event. The
                    hardest part of all of this is connecting bands and porches
                    but we go as fast as we can!{" "}
                  </li>
                </ul>
                <h3>Will I be paid for performing?</h3>
                <ul className="x">
                  <li>Not by us :( </li>
                  <li>
                    We would love to pay all of the porchfest musicians
                    directly, but, being entirely volunteer driven with hundreds
                    of musicians involved, we cannot.
                  </li>
                  <li>
                    We strongly push attendees to tip, and often hear feedback
                    that tips do come through pretty well! Of course, this is
                    not guaranteed.{" "}
                  </li>
                  <li>
                    If you are unable to play for tips only, then this event is
                    unfortunately not for you.
                  </li>
                </ul>
                <h3>Is there sound/PA support provided?</h3>
                <ul className="x">
                  <li>
                    <b>No! Bands are in charge of their own sound. </b>
                  </li>
                  <li>
                    If you’re playing at a porch that has multiple bands during
                    the day, we encourage gear sharing and will connect you with
                    the other bands via email!{" "}
                  </li>
                  <li>
                    You MUST be prepared to provide your own sound for
                    porchfest. Do not apply if you can’t commit to this.
                  </li>
                </ul>
              </div>
              <div></div>

              <div className="centered">
                <div className="" style={{ marginRight: 20 }}>
                  <a
                    className="ctaPrimary"
                    rel="noreferrer"
                    // target="_blank"
                    href="#"
                  >
                    Apply to Play - Available April 1
                  </a>
                </div>

                {/* <div>
                  <a
                    href="mailto:uptownporchfest@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    className="ctaPrimary"
                  >
                    Download Band Guide TO DO
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForBands;
