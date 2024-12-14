import RobotComp from './RobotComp';

const RobotTable = ({ robotArr }) => {
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
    height: '100%',
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
    // font: "Fira Sans",
    flex: '1',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  },
  tableBody: {
    flex: "1",
    maxwidth: '50%',
    border: '1px solid #ddd',
    backgroundColor: '#112d37',
    color: 'white',
    display: 'block',
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  tableRow: {
    display: 'flex',
    borderBottom: '1px solid #ddd',
  },
};

export default RobotTable;