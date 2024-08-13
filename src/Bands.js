import data from "./data/bands.json";
import "./Bands.css";
// import backupImg from './img/3_fiddlers_in_silhouette.svg.png';
import { useEffect, useState } from "react";

const BandTile = ({ bandInfo }) => {
  const newVenmoLink = bandInfo.venmo
    ? "https://venmo.com/u/" + bandInfo.venmo.substring(1)
    : "";
  return (
    <div className="band-tile">
      <a href={bandInfo.img_url}>
        <img
          className="tile-image"
          style={{ objectPosition: bandInfo.object_position_value }}
          src={bandInfo.img_url}
        />
      </a>
      <div className="band-info-text">
        <h2 className="band-name">{bandInfo.band_name}</h2>
        <h3 className="band-genre">
          <i>{bandInfo.genre}</i>
        </h3>
        <h3 className="band-genre">
          {bandInfo.porch_address} | {bandInfo.time}
        </h3>
        <p className="band-bio">{bandInfo.bio}</p>
      </div>
      <div className="band-social-icons">
        {bandInfo.facebook_link && (
          <a href={bandInfo.facebook_link}>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="url(#paint0_linear_87_7208)"
                ></circle>{" "}
                <path
                  d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                  fill="white"
                ></path>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_87_7208"
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="29.917"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#18ACFE"></stop>{" "}
                    <stop offset="1" stop-color="#0163E0"></stop>{" "}
                  </linearGradient>{" "}
                </defs>{" "}
              </g>
            </svg>
          </a>
        )}

        {bandInfo.instagram_link && (
          <a href={bandInfo.instagram_link}>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint0_radial_87_7153)"
                ></rect>{" "}
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint1_radial_87_7153)"
                ></rect>{" "}
                <rect
                  x="2"
                  y="2"
                  width="28"
                  height="28"
                  rx="6"
                  fill="url(#paint2_radial_87_7153)"
                ></rect>{" "}
                <path
                  d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                  fill="white"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                  fill="white"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                  fill="white"
                ></path>{" "}
                <defs>
                  {" "}
                  <radialGradient
                    id="paint0_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                  >
                    {" "}
                    <stop stop-color="#B13589"></stop>{" "}
                    <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
                    <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                  </radialGradient>{" "}
                  <radialGradient
                    id="paint1_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                  >
                    {" "}
                    <stop stop-color="#E0E8B7"></stop>{" "}
                    <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
                    <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
                    <stop
                      offset="1"
                      stop-color="#E2425C"
                      stop-opacity="0"
                    ></stop>{" "}
                  </radialGradient>{" "}
                  <radialGradient
                    id="paint2_radial_87_7153"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                  >
                    {" "}
                    <stop offset="0.156701" stop-color="#406ADC"></stop>{" "}
                    <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
                    <stop
                      offset="1"
                      stop-color="#6A45BE"
                      stop-opacity="0"
                    ></stop>{" "}
                  </radialGradient>{" "}
                </defs>{" "}
              </g>
            </svg>
          </a>
        )}

        {bandInfo.bandcamp_link && (
          <a href={bandInfo.bandcamp_link}>
            <svg
              width="32px"
              height="32px"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Bandcamp"
              role="img"
              viewBox="-51.2 -51.2 614.40 614.40"
              fill=""
              stroke=""
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="1.024"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
                <path fill="#1ad" d="M99 349h215l99-186H198"></path>
              </g>
            </svg>{" "}
          </a>
        )}

        {bandInfo.soundcloud_link && (
          <a href={bandInfo.soundcloud_link}>
            <svg
              width="32px"
              height="32px"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="SoundCloud"
              role="img"
              viewBox="0 0 512 512"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <rect width="512" height="512" rx="15%" fill="#f50"></rect>
                <path
                  d="m59 270-3 22 3 22c0 2 3 2 3 0l3-22-3-22c0-3-3-3-3 0zm18-14c0-3-3-3-3 0l-5 36 4 35c0 3 4 3 4 0l4-35zm59-30-3 66 2 40c0 8 7 8 7 0l4-40-4-66c0-5-6-5-6 0zm-31 22-4 44 3 40c0 6 5 6 5 0l4-40-4-44c0-3-4-3-4 0zm70 84 3-40-3-88c0-6-7-6-7 0l-3 88 2 40c0 8 8 8 8 0zm68 0 2-40-2-102c0-7-10-7-10 0l-2 102 2 40c0 8 10 8 10 0zm-34 0 3-40-3-89c0-6-9-6-9 0l-2 89 2 40c0 8 9 8 9 0zm-83 0 3-40-3-41c0-3-6-3-6 0l-3 41 3 40c0 7 6 7 6 0zm-33 0 4-40-4-43c0-3-4-3-4 0l-4 43 4 40c0 4 4 4 4 0zm124-125-2 85 1 40c0 8 10 8 10 0l2-40-2-85c0-7-9-7-9 0zm-58 125 3-40-3-81c0-6-7-6-7 0l-3 81 2 40c0 8 8 8 8 0zm33 0 3-40-3-91c0-6-8-6-8 0l-3 91 3 40c0 8 8 8 8 0zm196-89c-5-57-64-94-118-73-4 2-5 3-5 6v156c0 3 2 6 5 6h137c27 0 49-22 49-49 0-37-35-57-68-46zm-138-62-3 111 3 40c0 8 10 8 10 0l3-40-3-111c0-7-10-7-10 0z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
          </a>
        )}

        {bandInfo.spotify_link && (
          <a href={bandInfo.spotify_link}>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="#1ED760"
                  fill-rule="evenodd"
                  d="M19.0983701,10.6382791 C15.230178,8.34118115 8.85003755,8.12986439 5.15729493,9.25058527 C4.56433588,9.43062856 3.93727638,9.09580812 3.75758647,8.50284907 C3.57789655,7.90953664 3.91236362,7.28283051 4.50585273,7.10261054 C8.74455585,5.81598127 15.7909802,6.06440214 20.2440037,8.70780512 C20.7774195,9.02442687 20.9525156,9.71332656 20.6362472,10.2456822 C20.3198021,10.779098 19.6305491,10.9549008 19.0983701,10.6382791 M18.971686,14.0407262 C18.7004726,14.4810283 18.1246521,14.6190203 17.6848801,14.3486903 C14.4600027,12.3664473 9.54264764,11.792217 5.72728477,12.9503953 C5.23256328,13.0998719 4.70992535,12.8208843 4.55974204,12.3270462 C4.41061884,11.8323247 4.68978312,11.3107469 5.18362118,11.1602103 C9.5419409,9.83771368 14.9600247,10.4782013 18.6638986,12.7544503 C19.1036707,13.0253103 19.242016,13.6013075 18.971686,14.0407262 M17.5034233,17.308185 C17.2876894,17.6617342 16.827245,17.7725165 16.4749326,17.5571359 C13.6571403,15.8347984 10.1101639,15.4459119 5.93312425,16.4000177 C5.53063298,16.4922479 5.12937851,16.2399399 5.03767834,15.8376253 C4.94544812,15.4351341 5.19669597,15.0338796 5.60024736,14.9420027 C10.1712973,13.8970803 14.0923186,14.3467468 17.2551791,16.2796943 C17.6078449,16.4948982 17.7189805,16.9556959 17.5034233,17.308185 M12,0 C5.37267547,0 0,5.37249879 0,11.9998233 C0,18.6278546 5.37267547,24 12,24 C18.6275012,24 24,18.6278546 24,11.9998233 C24,5.37249879 18.6275012,0 12,0"
                ></path>{" "}
              </g>
            </svg>{" "}
          </a>
        )}

        {bandInfo.website_link && (
          <a href={bandInfo.website_link}>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="style=stroke" clip-path="url(#clip0_1_1828)">
                  {" "}
                  <g id="web">
                    {" "}
                    <path
                      id="vector (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.4425 2.44429C10.0752 3.64002 9.32073 6.25569 8.89915 8.83258C9.99331 9.00921 11.0621 9.12209 12 9.12209C12.9379 9.12209 14.0067 9.00921 15.1009 8.83258C14.6793 6.25569 13.9248 3.64002 13.5575 2.44429C13.0509 2.3624 12.5307 2.31977 12 2.31977C11.4693 2.31977 10.9491 2.3624 10.4425 2.44429ZM15.3337 2.90893C15.737 4.305 16.2958 6.42828 16.6448 8.54737C18.1513 8.23703 19.5727 7.85824 20.605 7.56109C19.4986 5.42102 17.6172 3.74662 15.3337 2.90893ZM21.2129 9.01933C20.1222 9.33683 18.5423 9.76328 16.8594 10.1057C16.9295 10.7564 16.9709 11.3958 16.9709 12C16.9709 12.8816 16.8827 13.8411 16.7445 14.8058C18.759 14.3858 20.6068 13.849 21.5557 13.5575C21.6376 13.0509 21.6802 12.5307 21.6802 12C21.6802 10.959 21.5162 9.95751 21.2129 9.01933ZM21.0911 15.3337C19.9166 15.6729 18.229 16.1219 16.4634 16.4634C16.1219 18.229 15.6729 19.9166 15.3337 21.0911C17.9978 20.1138 20.1138 17.9978 21.0911 15.3337ZM13.5576 21.5557C13.849 20.6068 14.3858 18.759 14.8058 16.7445C13.8411 16.8827 12.8816 16.9709 12 16.9709C11.1184 16.9709 10.1589 16.8827 9.19423 16.7445C9.61421 18.759 10.151 20.6068 10.4425 21.5557C10.9491 21.6376 11.4693 21.6802 12 21.6802C12.5307 21.6802 13.0509 21.6376 13.5576 21.5557ZM8.66629 21.0911C8.32707 19.9166 7.8781 18.229 7.53658 16.4634C5.77099 16.1219 4.08335 15.6729 2.90891 15.3337C3.88622 17.9978 6.00216 20.1138 8.66629 21.0911ZM2.44429 13.5575C3.39316 13.849 5.24101 14.3858 7.25548 14.8058C7.1173 13.8411 7.02907 12.8816 7.02907 12C7.02907 11.3958 7.07048 10.7564 7.14056 10.1057C5.45769 9.76328 3.87779 9.33683 2.78712 9.01933C2.48383 9.95751 2.31977 10.959 2.31977 12C2.31977 12.5307 2.3624 13.0509 2.44429 13.5575ZM3.39504 7.56109C4.42731 7.85824 5.84865 8.23703 7.35522 8.54737C7.70416 6.42827 8.26303 4.305 8.66626 2.90893C6.38282 3.74662 4.50139 5.42102 3.39504 7.56109ZM8.68924 10.3888C8.63137 10.9544 8.59884 11.4968 8.59884 12C8.59884 12.9399 8.71224 14.012 8.88985 15.1102C9.98798 15.2878 11.0601 15.4012 12 15.4012C12.9399 15.4012 14.012 15.2878 15.1102 15.1102C15.2878 14.012 15.4012 12.9399 15.4012 12C15.4012 11.4968 15.3686 10.9544 15.3108 10.3888C14.1776 10.5703 13.0348 10.6919 12 10.6919C10.9652 10.6919 9.82236 10.5703 8.68924 10.3888ZM9.67273 0.991173C10.4243 0.833026 11.2029 0.75 12 0.75C12.7971 0.75 13.5757 0.833026 14.3273 0.991174C18.0108 1.76627 21.0281 4.34097 22.42 7.75174C22.9554 9.06356 23.25 10.4983 23.25 12C23.25 12.7971 23.167 13.5757 23.0088 14.3273C22.0943 18.6736 18.6736 22.0943 14.3273 23.0088C13.5757 23.167 12.7971 23.25 12 23.25C11.2029 23.25 10.4243 23.167 9.67273 23.0088C5.32644 22.0943 1.90572 18.6736 0.991173 14.3273C0.833026 13.5757 0.75 12.7971 0.75 12C0.75 10.4972 1.04509 9.06132 1.58123 7.74866C2.97369 4.33943 5.99026 1.76604 9.67273 0.991173Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_1_1828">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          </a>
        )}

        {bandInfo.venmo && (
          <a href={newVenmoLink}>
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
      </div>
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

const Bands = () => {
  const [sortBy, setSortBy] = useState("alphabetical");
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    setSortedData([...data].sort(sortDict[sortBy]));
  }, [sortBy]);

  return (
    <div className="">
      <div className="bands-container padded-container">
        {/* <h2>Stay tuned - Applications open from April 1 - June 1!</h2> */}
        {/* <div className="sort-info">
          <h3>Sort by: </h3>
          <button onClick={() => setSortBy('alphabetical')}>Alphabetical</button>
          <button onClick={() => setSortBy('reverseAlphabetical')}>Reverse Alphabetical</button>
          <button onClick={() => setSortBy('genre')}>Genre</button>
        </div> */}
        <div className="tiles-container">
          {sortedData.map((band) => (
            <BandTile bandInfo={band} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bands;
