import mapPdf from "./resources/2024-porchfest-mapv2.pdf";

const Map = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: "20px" }}>
          <h2>
            <a href={mapPdf} target="_blank">
              Click here to download the PDF map
            </a>
          </h2>
        </div>
        <div style={{ height: "85vh" }}>
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
