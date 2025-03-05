function BandDetails({ band, onClose }) {

    if (!band) {
        return null;
    }

    return (
        <div className="band-details">
            <h2>Band Details</h2>
            {band ? (
                <div>
                    <h3>Name: {band.name}</h3>
                    <p>Origin: {band.origin}</p>
                    <p>City: {band.city}</p>
                    <p>Start year: {band.startYear}</p>
                    <p>Separation year: {band.separationYear}</p>
                    <p>Members: {band.members}</p>
                    <p>Musical current: {band.musicalCurrent}</p>
                    <p>Presentation: {band.presentation}</p>

                    <button onClick={onClose}>Close</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default BandDetails;