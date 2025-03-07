import React, { useState } from "react";
import { uploadFile } from "../api";

function UploadFileForm({ onClose, onUpload }) {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (file) {
            await uploadFile(file);
            alert("File uploaded successfully!");
            onUpload();
        }
    };

    return (
        <div className="band-details">
            <h2>📂 Import Bands</h2>
            <input type="file" id="file-input" data-testid="file-upload" onChange={(e) => setFile(e.target.files[0])} required />

            <button className="band-close" onClick={onClose}>Close</button>&nbsp;&nbsp;
            <button type="submit" className="band-submit" onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default UploadFileForm;
