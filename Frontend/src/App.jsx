import { useEffect, useState } from 'react';
import MapScreen from './screen/MapScreen';
import RobotTable from './screen/robotTable';
import "./app.css";

function App() {

  const [robots, setRobots] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRobotData();
    reCallData();
  }, []);

  function reCallData() {
    getRobotData();
    setTimeout(reCallData, 5000);
  }

  // Fetch robot data
  async function getRobotData() {
    try {
      let response = await fetch('http://127.0.0.1:8000/robots/');
      if (!response.ok) {
        throw new Error('Failed to fetch robots data');
      }
      let data = await response.json();

      const robotList = data.map(element => {
        let location = element["Location Coordinates"];
        let latitude = null;
        let longitude = null;

        if (Array.isArray(location)) {
          [latitude, longitude] = location;
        }

        return {
          id: element["Robot ID"],
          status: element["Online/Offline"],
          battery: element["Battery Percentage"],
          cpuUsage: element["CPU Usage"],
          ramConsumption: element["RAM Consumption"],
          lastUpdated: element["Last Updated"],
          location: { latitude, longitude }
        }
      });
      setRobots(robotList);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <div style={styles.container}>
        <h1>Robot Monitoring Dashboard</h1>

        {error && <div style={styles.errorMessage}>Error: {error}</div>}
      </div>

      <div className='dashboard' style={styles.dashboard}>
        <RobotTable robotArr={robots} />

        <div className="map-container" style={styles.mapContainer}>
          <MapScreen data={robots} />
          
        </div>
      </div>
    </>
  );
}

const styles = {
  dashboard: {
    display: 'flex',
    gap: '20px',
    width: '100%',
    height: '80%',
    alignItems: 'flex-start',
  },
  robotTable: {
    height: '100%',
    flex: '1',
    minWidth: '300px',
    maxWidth: '500px',
    overflowY: 'auto',
  },
  mapContainer: {
    flex: 2,
    width:'100%',
    minWidth: '700px',
    height: '100%',
    backgroundColor: '#f0f0f0',
    marginbottom: '20px',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '20px',
  },

};
export default App;
