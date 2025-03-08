function BandList({ bands, onView, onDelete, onEdit }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4 flex items-center">
        🎸 Band List{' '}
      </h2>
      {bands.length === 0 ? (
        <p className="text-gray-500 text-lg italic">No bands available.</p>
      ) : (
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md mb-6">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Origin</th>
              <th className="py-3 px-6 text-left">City</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band, index) => (
              <tr
                key={band.id}
                className={`border-b ${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200 transition-all`}
              >
                <td className="py-3 px-6">{band.name}</td>
                <td className="py-3 px-6">{band.origin}</td>
                <td className="py-3 px-6">{band.city}</td>
                <td className="py-3 px-6 flex justify-center space-x-3">
                  <button
                    onClick={() => onView(band.id)}
                    className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onEdit(band.id)}
                    className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(band.id)}
                    className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default BandList
