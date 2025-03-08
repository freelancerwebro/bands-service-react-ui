function BandDetails({ band, onClose, onEdit }) {
  if (!band) {
    return null
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-left">
        Band Details
      </h2>

      {band ? (
        <div className="space-y-3 text-left">
          <h3 className="text-lg font-semibold text-gray-700">
            Name: <span className="font-normal text-gray-900">{band.name}</span>
          </h3>
          <p className="text-gray-700">
            <span className="font-semibold">Origin:</span> {band.origin}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">City:</span> {band.city}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Start Year:</span> {band.startYear}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Separation Year:</span>{' '}
            {band.separationYear || 'N/A'}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Members:</span> {band.members}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Musical Current:</span>{' '}
            {band.musicalCurrent}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Presentation:</span>{' '}
            {band.presentation}
          </p>

          <div className="flex space-x-4 mt-6">
            <button
              className="px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-700 transition-all"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
              onClick={onEdit}
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-lg italic text-left">Loading...</p>
      )}
    </div>
  )
}

export default BandDetails
