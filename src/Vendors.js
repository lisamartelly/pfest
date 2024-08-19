
import img1 from "./img/vendor1.jpg";
import img2 from "./img/vendor2.jpg"


const Vendors = () => {

    return (
      <div>
        <div className="padded-container">
          <div  className="half-flex">
            <div id="host-row-1">
              <div className="white-box">
                <h2>Hey food vendors!</h2>
                

                <p>
                Do you have great portable food that you can sell at Porchfest? Yes? Well then <b>we want to have you!</b> 
                </p>
                <div class="divider div-transparent div-dot"></div>
                <div>
                    <h3>All that's required: </h3>
                    <ul className="x">
                      <li>You make and sell food</li>
                      <li>You have or are willing to get a food permit (we can help with this)</li>
                      <li>You <b>don't</b> have to be a truck - we can put a booth in a park, too!</li>
                    </ul>
                  </div>
                
                <div className="centered">
                  <div className="" style={{marginRight : 20}}>
                    <a href="https://forms.gle/A88278HRvBP81geLA" rel="noreferrer" target="_blank" className="ctaPrimary">Sign up to be a food vendor!</a>
                  </div>

                  <div >
                    <a href="https://forms.gle/yvXUSaUVUsw2gYUGA" rel="noreferrer" target="_blank" className="ctaPrimary">Request more info</a>
                  </div>
                </div>
                

              </div>
             
              
            </div>
            <div className="host-col-2">
                <img src = {img1} alt="pfest" id="img1" className="fancy-img" />
            </div>
          </div>
        </div>

          
          
         
      </div>
        
    );
  };
  
  export default Vendors;