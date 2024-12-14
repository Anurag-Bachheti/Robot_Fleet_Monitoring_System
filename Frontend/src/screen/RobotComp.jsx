const RobotComp = ({ robots }) => {
    return (
        <>
            {robots.length > 0 ? (
                robots.map((robot, index) => {
                    const isOffline = !robot.status;
                    const isLowBattery = robot.battery < 20;

                    return (
                        <div
                            style={{
                                ...styles.tableRow,
                                backgroundColor: isOffline
                                    ? '#575782' // Light blue for offline
                                    : isLowBattery
                                        ? '#eb8f34' // Light red for low battery
                                        : 'white', // Default background
                            }}
                            key={index}
                        >
                            <div style={styles.tableCell}>{robot.id}</div>
                            <div style={styles.tableCell}>
                                {robot.status ? 'Online' : 'Offline'}
                            </div>
                            <div style={styles.tableCell}>{robot.battery}%</div>
                            <div style={styles.tableCell}>{robot.cpuUsage}%</div>
                            <div style={styles.tableCell}>{robot.ramConsumption} MB</div>
                            <div style={styles.tableCell}>{robot.lastUpdated}</div>
                            <div style={styles.tableCell}>
                                Latitude: {robot.location.latitude}, Longitude: {robot.location.longitude}
                            </div>
                        </div>
                    );
                })
            ) : (
                <div style={styles.tableRow}>No robots data available</div>
            )}
        </>
    )
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        height: '100vh', // Ensures the page takes up full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Aligns content to the top
    },
    errorMessage: {
        color: 'red',
        marginBottom: '20px',
    },
    tableContainer: {
        width: '100%',
        maxHeight: '80vh',  // Ensures the table occupies a significant portion of the viewport
        border: '1px solid #ddd',
        overflowY: 'auto',  // Enables vertical scrolling for the table body
    },
    tableHeader: {
        color: 'black',
        display: 'flex',
        position: 'sticky',
        top: 0, // Keeps the header at the top of the table
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold',
        zIndex: 1, // Ensure the header stays above the body
    },
    tableCell: {
        flex: '1',
        padding: '10px',
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
    },
    tableBody: {
        backgroundColor: 'white',
        color: 'black',
        display: 'block',
        maxHeight: '70vh',  // Adjust height to show at least 7 rows
        overflowY: 'auto', // Enables scrolling in body
    },
    tableRow: {
        display: 'flex',
        borderBottom: '1px solid #ddd',
    },
};

export default RobotComp;