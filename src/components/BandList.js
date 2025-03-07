function BandList({ bands, onView, onDelete, onEdit }) {
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
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bands.map((band) => (
                        <tr key={band.id}>
                            <td>{band.name}</td>
                            <td>{band.origin}</td>
                            <td>{band.city}</td>
                            <td>
                                <button onClick={() => {
                                    onView(band.id);
                                }}>
                                    View
                                </button>&nbsp;&nbsp;
                                <button onClick={() => {
                                    onEdit(band.id);
                                }}>
                                    Edit
                                </button>&nbsp;&nbsp;
                                <button onClick={() => {
                                    onDelete(band.id);
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
