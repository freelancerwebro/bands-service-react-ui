import React, {useEffect, useState} from "react";
import { createBand, updateBand } from "../api";

function BandForm({ band, onSave, onClose }) {
    const [formData, setFormData] = useState(band || {
        name: "",
        origin: "",
        city: "",
        startYear: "",
        separationYear: "",
        members: "",
        musicalCurrent: "",
        presentation: "",
    });

    useEffect(() => {
        if (band) {
            setFormData(band);
        }
    }, [band]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (band) {
            await updateBand(band.id, formData);
        } else {
            await createBand(formData);
        }
        onSave();
    };

    return (
        <div className="band-details">
            <form onSubmit={handleSubmit}>
                <h2>{band ? "Edit Band" : "Add Band"}</h2>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name || ""} onChange={handleChange} required /> <br/>

                <label>Origin:</label>
                <input type="text" name="origin" value={formData.origin || ""} onChange={handleChange} required /> <br/>

                <label>City:</label>
                <input type="text" name="city" value={formData.city || ""} onChange={handleChange} required /> <br/>

                <label>Start year:</label>
                <input type="number" name="startYear" value={formData.startYear || ""} onChange={handleChange} required /> <br/>

                <label>Separation year:</label>
                <input type="number" name="separationYear" value={formData.separationYear || ""} onChange={handleChange} /> <br/>

                <label>Members:</label>
                <input type="number" name="members" value={formData.members || ""} onChange={handleChange} /> <br/>

                <label>Musical current:</label>
                <input type="text" name="musicalCurrent" value={formData.musicalCurrent || ""} onChange={handleChange} required /> <br/>

                <label>Presentation:</label>
                <textarea name="presentation" value={formData.presentation || ""} onChange={handleChange} required /> <br/>

                <button onClick={onClose}>Close</button> &nbsp;&nbsp;
                <button type="submit" className="band-edit">{band ? "Update Band" : "Create Band"}</button>
            </form>
        </div>
    );
}

export default BandForm;
