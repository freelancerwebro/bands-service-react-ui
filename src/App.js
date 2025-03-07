import React, {useEffect, useState, useRef} from "react";
import {getBand, getBands, deleteBand} from "./api";
import BandList from "./components/BandList";
import BandDetails from "./components/BandDetails";
import BandForm from "./components/BandForm";
import './App.css';

function App() {
    const [bands, setBands] = useState([]);
    const [selectedBand, setSelectedBand] = useState(null);
    const [selectedBandId, setSelectedBandId] = useState(null);
    const [view, setView] = useState("list"); // "details", "edit", "list", "add"

    useEffect(() => {
        fetchBands();
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

    const fetchBands = async () => {
        getBands().then(setBands).catch(() => {
            setBands([]);
        });
    }

    const handleOnDelete = async (id) => {
        if(confirm("Are you sure you want to delete this band?") === false) return;

        await deleteBand(id);
        setBands(bands.filter((band) => band.id !== id));
        setView("list");
    };

    const openEditForm = (id) => {
        setView("edit");
        setSelectedBandId(id);
    }

    const openViewDetails = (id) => {
        setView("details");
        setSelectedBandId(id);
    }

    const openCreateForm = () => {
        setView("add");
    }

    const handleClose = () => {
        setSelectedBandId(null);
        setSelectedBand(null);
        setView("list");
    }

    const handleOnSaveSubmit = () => {
        handleClose();

        fetchBands();
    }

  return (
      <div>
        <h1>🎵 Bands Management</h1>

          {view === "list" &&
              <button className="create-band" onClick={openCreateForm}>Create new band</button>
          }

          {view === "details" && selectedBandId && (
              <BandDetails band={selectedBand} onEdit={() => { openEditForm(selectedBandId) }} onClose={handleClose} />
          )}

          {view === "edit" && selectedBandId && (
            <BandForm band={selectedBand} onSave={() => {handleOnSaveSubmit()}} onClose={handleClose}/>
          )}

          {view === "add" && (
              <BandForm onSave={() => {handleOnSaveSubmit()}} onClose={handleClose}/>
          )}

          <BandList onView={openViewDetails} bands={bands} onDelete={handleOnDelete} onEdit={openEditForm}/>
      </div>
  );
}

export default App;
