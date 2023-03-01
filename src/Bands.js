
import data from "./data/bands.json";
import './Bands.css';
import backupImg from './img/generic_notes.png';
import { useEffect, useState } from "react";

const BandTile = ({bandInfo}) => {
  return <div className="band-tile">
    <a href={bandInfo.img_url}><img className="tile-image" src={bandInfo.img_url || backupImg}/></a>
    <div>
      <h4>{bandInfo.band_name}</h4>
      <p>Genre: {bandInfo.genre}</p>
      <p>Location: {bandInfo.porch_address}</p>
    </div>
  </div>
}

const alphaSort = (band1, band2) => {
  if (band1.band_name.toLowerCase() < band2.band_name.toLowerCase()) {
    return -1;
  }
  if ((band2.band_name.toLowerCase() < band1.band_name.toLowerCase())) {
    return 1;
  }
  return 0;
};


const sortDict = {
  'alphabetical': alphaSort,
  'reverseAlphabetical': (band1, band2) => -1*alphaSort(band1, band2),
  "genre": (band1, band2) => {
    if (band1.genre.toLowerCase() < band2.genre.toLowerCase()) {
      return -1;
    }
    if ((band2.genre.toLowerCase() < band1.genre.toLowerCase())) {
      return 1;
    }
    return alphaSort(band1, band2);
  }
}

const Bands = () => {

  const [sortBy, setSortBy] = useState('alphabetical');
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    setSortedData([...data].sort(sortDict[sortBy]));
  }, [sortBy])

  return (
    <div className="">
      <div className="bands-container">
        <div className="sort-info">
          <h3>Sort by: </h3>
          <button onClick={() => setSortBy('alphabetical')}>Alphabetical</button>
          <button onClick={() => setSortBy('reverseAlphabetical')}>Reverse Alphabetical</button>
          <button onClick={() => setSortBy('genre')}>Genre</button>
        </div>
        <div className="tiles-container">
          {sortedData.map(band => <BandTile bandInfo={band}/>)}
        </div>
      </div>
    </div>
      
  );
};

export default Bands;