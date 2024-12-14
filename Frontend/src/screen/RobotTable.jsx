import RobotComp from './RobotComp';

const RobotTable = ({robotArr}) => {
    return (
        <>

            <div style={styles.tableContainer}>
                <div style={styles.tableHeader}>
                    <div style={styles.tableCell}>ID</div>
                    <div style={styles.tableCell}>Status</div>
                    <div style={styles.tableCell}>Battery</div>
                    <div style={styles.tableCell}>CPU Usage</div>
                    <div style={styles.tableCell}>RAM Consumption</div>
                    <div style={styles.tableCell}>Last Updated</div>
                    <div style={styles.tableCell}>Location</div>
                </div>

                <div style={styles.tableBody}>
                    <RobotComp robots={robotArr} />
                </div>
            </div>

        </>
    )
}


const styles = {
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

export default RobotTable;