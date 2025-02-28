import React, {useEffect, useState, useRef} from "react";
import { getBands } from "./api";
import BandList from "./components/BandList";
import './App.css';

function App() {
    const [bands, setBands] = useState([]);
    const [selectedBand, setSelectedBand] = useState(null);
    const isFirstRender = useRef(true); // 🔹 Track the first render

    // Fetch bands only once
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            fetchBands();
        }
    }, []);

    const fetchBands = async () => {
        try {
            const data = await getBands();
            setBands(data);
        } catch (error) {
            console.error("Error fetching bands:", error);
        }
    };

  return (
      <div>
        <h1>🎵 Bands Management</h1>
          <BandList bands={bands} onSelect={setSelectedBand} />
      </div>
  );
}

export default App;
