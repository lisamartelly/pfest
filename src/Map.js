
const Map = () => {

    return (
      <div>
        <div>
        {/* <div className="bands-container padded-container">
          <h2>Updated Map Coming Real Soon!</h2>
        </div> */}
          <div style={{height: '85vh'}}>
            <iframe 
              title="porchfest_map"
              src="https://www.google.com/maps/d/u/5/embed?mid=17Mv3Uf8JVEGKvMxJnT3mGaCXbBF8-H0&ehbc=2E312F" 
              width="100%" 
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
        
    );
  };
  
  export default Map;