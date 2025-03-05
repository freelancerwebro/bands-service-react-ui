import React, {useEffect, useState, useRef} from "react";
import {getBand, getBands, deleteBand} from "./api";
import BandList from "./components/BandList";
import BandDetails from "./components/BandDetails";
import './App.css';

function App() {
    const [bands, setBands] = useState([]);
    const [selectedBand, setSelectedBand] = useState(null);
    const [selectedBandId, setSelectedBandId] = useState(null);

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

    const handleDelete = async (id) => {
        if(confirm("Are you sure you want to delete this band?") === false) return;

        await deleteBand(id);
        setBands(bands.filter((band) => band.id !== id));
    };

  return (
      <div>
        <h1>🎵 Bands Management</h1>
          {selectedBandId && (
              <BandDetails band={selectedBand} onClose={() => setSelectedBandId(null)} />
          )}

          <BandList onSelect={setSelectedBandId} bands={bands} onDelete={handleDelete}/>
      </div>
  );
}

export default App;
