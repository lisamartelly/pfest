
import data from "./data/bands.json";
import './Bands.css';
import backupImg from './img/generic_notes.png';

const BandTile = ({bandInfo}) => {
  return <div className="band-tile">
    <a href={bandInfo.img_url}><img className="tile-image" src={bandInfo.img_url || backupImg}/></a>
    <div>
      <h4>{bandInfo.band_name}</h4>
      <p>Genre: {bandInfo.genre}</p>
      <p>Location: {bandInfo.porch_address}</p>
      {/* {bandInfo.info_url} */}
    </div>
  </div>
}

const Bands = () => {

  return (
    <div className="">
      <div className="bands-container">
        <h2>
            Check back soon for info on bands!
        </h2>
        <div className="tiles-container">
          {data.map(band => <BandTile bandInfo={band}/>)}
        </div>
      </div>
    </div>
      
  );
};

export default Bands;