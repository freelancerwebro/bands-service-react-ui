import React, { useEffect, useState } from 'react'
import { getBand, getBands, deleteBand } from './api'
import BandList from './components/BandList'
import BandDetails from './components/BandDetails'
import BandForm from './components/BandForm'
import './App.css'
import UploadFileForm from './components/UploadFileForm'

function App() {
  const [bands, setBands] = useState([])
  const [selectedBand, setSelectedBand] = useState(null)
  const [selectedBandId, setSelectedBandId] = useState(null)
  const [view, setView] = useState('list') // "details", "edit", "list", "add"

  useEffect(() => {
    fetchBands()
  }, [])

  useEffect(() => {
    if (!selectedBandId) return

    getBand(selectedBandId)
      .then((data) => {
        setSelectedBand(data)
      })
      .catch((error) => {
        console.error('Error fetching band:', error)
      })
  }, [selectedBandId])

  const fetchBands = () => {
    getBands()
      .then(setBands)
      .catch(() => {
        setBands([])
      })
  }

  const handleOnDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete this band?') === false) return

    await deleteBand(id)
    setBands(bands.filter((band) => band.id !== id))
    setView('list')
  }

  const openEditForm = (id) => {
    setView('edit')
    setSelectedBandId(id)
  }

  const openViewDetails = (id) => {
    setView('details')
    setSelectedBandId(id)
  }

  const openCreateForm = () => {
    setView('add')
  }

  const openUploadCsvForm = () => {
    setView('upload')
  }

  const handleClose = () => {
    setSelectedBandId(null)
    setSelectedBand(null)
    setView('list')
  }

  const handleOnSaveSubmit = () => {
    handleClose()
    fetchBands()
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center pt-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
        🎵 Bands Management
      </h1>

      {view === 'list' && (
        <div className="flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all"
            onClick={openCreateForm}
          >
            Create New Band
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition-all"
            onClick={openUploadCsvForm}
          >
            Upload CSV
          </button>
        </div>
      )}

      {view === 'details' && selectedBandId && (
        <BandDetails
          band={selectedBand}
          onEdit={() => {
            openEditForm(selectedBandId)
          }}
          onClose={handleClose}
        />
      )}

      {view === 'edit' && selectedBandId && (
        <BandForm
          band={selectedBand}
          onSave={() => {
            handleOnSaveSubmit()
          }}
          onClose={handleClose}
        />
      )}

      {view === 'add' && (
        <BandForm
          onSave={() => {
            handleOnSaveSubmit()
          }}
          onClose={handleClose}
        />
      )}

      {view === 'upload' && (
        <UploadFileForm
          onClose={handleClose}
          onUpload={() => {
            handleClose()
          }}
        />
      )}

      <BandList
        onView={openViewDetails}
        bands={bands}
        onDelete={handleOnDelete}
        onEdit={openEditForm}
      />
    </div>
  )
}

export default App
