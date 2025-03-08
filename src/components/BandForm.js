import React, { useEffect, useState } from 'react'
import { createBand, updateBand } from '../api'

function BandForm({ band, onSave, onClose }) {
  const [formData, setFormData] = useState(
    band || {
      name: '',
      origin: '',
      city: '',
      startYear: '',
      separationYear: '',
      members: '',
      musicalCurrent: '',
      presentation: '',
    }
  )

  useEffect(() => {
    if (band) {
      setFormData(band)
    }
  }, [band])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (band) {
      await updateBand(band.id, formData)
    } else {
      await createBand(formData)
    }
    onSave()
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <h2 className="col-span-1 sm:col-span-2 text-2xl font-bold text-gray-800 mb-4 text-left">
          {band ? 'Edit Band' : 'Add Band'}
        </h2>

        <label className="block">
          <span className="font-semibold text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-gray-700">Origin:</span>
          <input
            type="text"
            name="origin"
            value={formData.origin || ''}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-gray-700">City:</span>
          <input
            type="text"
            name="city"
            value={formData.city || ''}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-gray-700">Start Year:</span>
          <input
            type="number"
            name="startYear"
            value={formData.startYear || ''}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-gray-700">Separation Year:</span>
          <input
            type="number"
            name="separationYear"
            value={formData.separationYear || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-gray-700">Members:</span>
          <input
            type="number"
            name="members"
            value={formData.members || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="font-semibold text-gray-700">Musical Current:</span>
          <input
            type="text"
            name="musicalCurrent"
            value={formData.musicalCurrent || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="block col-span-1 sm:col-span-2">
          <span className="font-semibold text-gray-700">Presentation:</span>
          <textarea
            name="presentation"
            value={formData.presentation || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <div className="col-span-1 sm:col-span-2 flex justify-between mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-700 transition-all"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
          >
            {band ? 'Update Band' : 'Create Band'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default BandForm
