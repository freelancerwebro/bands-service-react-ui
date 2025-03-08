import React, { useState } from 'react'
import { uploadFile } from '../api'

function UploadFileForm({ onClose, onUpload }) {
  const [file, setFile] = useState(null)

  const handleUpload = async () => {
    if (file) {
      await uploadFile(file)
      alert('File uploaded successfully!')
      onUpload()
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        📂 Import Bands
      </h2>

      <div className="flex flex-col items-center">
        <input
          type="file"
          id="file-input"
          data-testid="file-upload"
          onChange={(e) => setFile(e.target.files[0])}
          required
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 mb-4"
        />

        <div className="flex space-x-4">
          <button
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
            onClick={onClose}
          >
            Close
          </button>

          <button
            type="submit"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadFileForm
