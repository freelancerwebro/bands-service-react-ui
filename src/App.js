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
        getBands().then(setBands).catch(() => {
            setBands([]);
        });
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
        setView("list");
    };

    const handleEdit = (id) => {
        console.log("handleEdit triggered", id);
        console.log("selectedBand = ", selectedBand);

        setView("edit");
        setSelectedBandId(id);
    }

    const handleView = (id) => {
        console.log("handleView triggered", id);
        setView("details");
        setSelectedBandId(id);
    }

    const handleCreate = () => {
        console.log("handleCreate triggered");
        setView("add");
    }

    const handleClose = () => {
        console.log("handleClose triggered");

        setSelectedBandId(null);
        setSelectedBand(null);
        setView("list");
    }

  return (
      <div>
        <h1>🎵 Bands Management</h1>

          {view === "list" &&
              <button className="create-band" onClick={handleCreate}>Create new band</button>
          }

          {view === "details" && selectedBandId && (
              <BandDetails band={selectedBand} onEdit={() => { handleEdit(selectedBandId) }} onClose={handleClose} />
          )}

          {view === "edit" && selectedBandId && (
            <BandForm band={selectedBand} onSave={() => {
                console.log('Edit onSave triggered', selectedBandId);

                setSelectedBandId(null);
                setSelectedBand(null);
                setView("list");
            }} onClose={handleClose}/>
          )}

          {view === "add" && (
              <BandForm onSave={() => {
                  console.log('Add onSave triggered');

                  setSelectedBandId(null);
                  setSelectedBand(null);
                  setView("list");
              }} onClose={handleClose}/>
          )}

          <BandList onView={handleView} bands={bands} onDelete={handleDelete} onEdit={handleEdit}/>
      </div>
  );
}

export default App;
