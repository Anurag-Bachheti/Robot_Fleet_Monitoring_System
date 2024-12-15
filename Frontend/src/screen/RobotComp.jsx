import lowBatteryIcon from '../assets/batteryAlert.svg';
import redDotIcon from '../assets/redDot.svg';
import greenDotIcon from '../assets/greenDot.svg';

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
                            }}
                            key={index}
                        >
                            <div style={styles.tableCell}>{robot.id}</div>
                            <div style={{display: 'flex', alignItems: 'center', ...styles.tableCell}}>
                                {robot.status ? (
                                    <>
                                        <img src={greenDotIcon} style={{ width: '70px', height: '70px', marginRight:'5px' }} alt="Green dot" />
                                        Online 
                                    </>
                                ) : (
                                    <>
                                        <img src={redDotIcon} style={{ width: '70px', height: '70px', }} alt="Red dot" />
                                        Offline
                                    </>
                                )}
                            </div>
                            <div style={styles.batteryContainer}>
                                {robot.battery}%
                                {robot.battery < 20 && (
                                    <div style={styles.icon}>
                                        <img src={lowBatteryIcon} style={{ width: '20px', height: '20px' }} />
                                    </div>
                                )}
                            </div>
                            <div style={styles.tableCell}>{robot.cpuUsage}%</div>
                            <div style={styles.tableCell}>{robot.ramConsumption} MB</div>
                            <div style={styles.tableCell}>{robot.lastUpdated}</div>
                            <div style={styles.tableCell}>
                                Latitude: {robot.location.latitude}, Longitude: {robot.location.longitude}
                            </div>
                        </div >
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
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    errorMessage: {
        color: 'red',
        marginBottom: '20px',
    },
    tableContainer: {
        width: '100%',
        maxHeight: '80vh',
        border: '1px solid #ddd',
        overflowY: 'auto',
    },
    tableHeader: {
        color: 'black',
        display: 'flex',
        position: 'sticky',
        top: 0,
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold',
        zIndex: 1,
    },
    tableCell: {
        display: 'flex',
        alignItems: 'center',
        flex: '1',
        padding: '10px',
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
        marginLeft: '20px',
    },
    batteryContainer: {
        display: 'flex',
        flex: '1',
        alignItems:'center',
        // gap:'5px',
        padding: '10px',
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
        marginLeft: '40px',
    },
    tableBody: {
        color: 'white',
        display: 'block',
        maxHeight: '70vh',
        overflowY: 'auto',
    },
    tableRow: {
        display: 'flex',
        borderBottom: '1px solid #ddd',
    },
    icon: {
        marginLeft: '5px',
    },
};

export default RobotComp;