import data from "./data/bands.json";
import "./Bands.css";
// import backupImg from './img/3_fiddlers_in_silhouette.svg.png';
import { useEffect, useState } from "react";

const TipTile = ({ bandInfo }) => {
  const newVenmoLink = bandInfo.venmo
    ? "https://venmo.com/u/" + bandInfo.venmo.substring(1)
    : "";
  return (
    <div className="band-tip-container">
      <h2 className="band-name" style={{}}>
        {bandInfo.band_name}
      </h2>
      {bandInfo.venmo && (
        <a
          className="bandTipVenmo"
          href={newVenmoLink}
          style={{ marginRight: 5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Venmo"
            role="img"
            viewBox="0 0 512 512"
            width="32px"
            height="32px"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="512" height="512" rx="15%" fill="#3396cd"></rect>
              <path
                d="m381.4 105.3c11 18.1 15.9 36.7 15.9 60.3 0 75.1-64.1 172.7-116.2 241.2h-118.8l-47.6-285 104.1-9.9 25.3 202.8c23.5-38.4 52.6-98.7 52.6-139.7 0-22.5-3.9-37.8-9.9-50.4z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
        </a>
      )}
      <h2>
        {bandInfo.venmo ? (
          <div>
            <span style={{ marginRight: 10 }}>:</span>
            <a
              style={{ textDecoration: "none", color: "magenta" }}
              href={newVenmoLink}
            >
              {bandInfo.venmo}
            </a>
          </div>
        ) : (
          <div>
            <span style={{ marginright: 10 }}>: </span>
            <span> no venmo - throw em a buck!</span>
          </div>
        )}
      </h2>
    </div>
  );
};

const alphaSort = (band1, band2) => {
  if (band1.band_name.toLowerCase() < band2.band_name.toLowerCase()) {
    return -1;
  }
  if (band2.band_name.toLowerCase() < band1.band_name.toLowerCase()) {
    return 1;
  }
  return 0;
};

const sortDict = {
  alphabetical: alphaSort,
  reverseAlphabetical: (band1, band2) => -1 * alphaSort(band1, band2),
  genre: (band1, band2) => {
    if (band1.genre.toLowerCase() < band2.genre.toLowerCase()) {
      return -1;
    }
    if (band2.genre.toLowerCase() < band1.genre.toLowerCase()) {
      return 1;
    }
    return alphaSort(band1, band2);
  },
};

const TipTheBands = () => {
  const [sortBy, setSortBy] = useState("alphabetical");
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    setSortedData([...data].sort(sortDict[sortBy]));
  }, [sortBy]);

  return (
    <div className="bandzforbands">
      <div className="padded-container">
        <h1
          style={{
            fontWeight: "bold",
            marginTop: "24px",
            marginBottom: "34px",
          }}
        >
          💸 Bandz for Bands 💸
        </h1>
        {/* <h2>Stay tuned - Applications open from April 1 - June 1!</h2> */}
        {/* <div className="sort-info">
          <h3>Sort by: </h3>
          <button onClick={() => setSortBy('alphabetical')}>Alphabetical</button>
          <button onClick={() => setSortBy('reverseAlphabetical')}>Reverse Alphabetical</button>
          <button onClick={() => setSortBy('genre')}>Genre</button>
        </div> */}
        <div>
          {sortedData.map((band) => (
            <TipTile bandInfo={band} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipTheBands;
