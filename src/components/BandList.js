function BandList({ bands, onSelect }) {
    return (
        <div>
            <h2>🎸 Band List </h2>
            {bands.length === 0 ? (
                <p>No bands available.</p>
            ) : (
                <table border="1" cellSpacing="0" cellPadding="10">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Origin</th>
                        <th>City</th>
                        <th>Start year</th>
                        <th>Separation year</th>
                        <th>Founders</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bands.map((band) => (
                        <tr key={band.id}>
                            <td>{band.name}</td>
                            <td>{band.origin}</td>
                            <td>{band.city}</td>
                            <td>{band.startYear}</td>
                            <td>{band.separationYear}</td>
                            <td>{band.founders}</td>
                            <td>
                                <button onClick={() => {
                                    console.log("View clicked:", band.id);
                                    onSelect(band.id);
                                }}>
                                    View
                                </button>&nbsp;&nbsp;
                                <button onClick={() => {
                                    console.log("Delete clicked:", band.id);
                                }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default BandList;
