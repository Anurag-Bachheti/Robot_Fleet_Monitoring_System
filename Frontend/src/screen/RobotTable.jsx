import React from 'react';
import RobotComp from './RobotComp';

const RobotTable = ({ robotArr, onRowHover, selectedRobot }) => {
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
            <RobotComp robots={robotArr} onRowHover={onRowHover}/>
          </div>

         <div style={styles.robotDetails}>
                {selectedRobot ? (
                    <div>
                        <h3>Robot Details</h3>
                        <p><strong>ID:</strong> {selectedRobot.id}</p>
                        <p><strong>Status:</strong> {selectedRobot.status ? 'Active' : 'Inactive'}</p>
                        <p><strong>Battery:</strong> {selectedRobot.battery}%</p>
                        <p><strong>CPU Usage:</strong> {selectedRobot.cpuUsage}%</p>
                        <p><strong>RAM Consumption:</strong> {selectedRobot.ramConsumption} MB</p>
                        <p><strong>Last Updated:</strong> {selectedRobot.lastUpdated}</p>
                        <p><strong>Location:</strong> Latitude {selectedRobot.location.latitude}, Longitude {selectedRobot.location.longitude}</p>
                    </div>
                ) : (
                    <p>Select a robot from the map to view details</p>
                )}
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