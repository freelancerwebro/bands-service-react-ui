import React, {useEffect, useState, useRef} from "react";
import {getBand, getBands} from "./api";
import BandList from "./components/BandList";
import BandDetails from "./components/BandDetails";
import './App.css';

function App() {
    const [bands, setBands] = useState([]);
    const [selectedBand, setSelectedBand] = useState(null);
    const [selectedBandId, setSelectedBandId] = useState(null);

    // Fetch bands only once
    useEffect(() => {
        getBands().then(setBands).catch(() => setBands([]));
    }, []);

    useEffect(() => {
        if (!selectedBandId) return;

        getBand(selectedBandId)
            .then((data) => {
                setSelectedBand(data);
            })
            .catch((error) => {
                console.error("Error fetching band:", error);
            });

    }, [selectedBandId]);

  return (
      <div>
        <h1>🎵 Bands Management</h1>
          {selectedBandId && (
              <BandDetails band={selectedBand} onClose={() => setSelectedBandId(null)} />
          )}

          <BandList onSelect={setSelectedBandId} bands={bands} />
      </div>
  );
}

export default App;
