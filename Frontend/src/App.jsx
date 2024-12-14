import { useEffect, useState } from 'react';
import MapScreen from './screen/MapScreen';
import RobotTable from './screen/robotTable';
import "./app.css";

function App() {
  const [filter, setFilter] = useState('All');
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

  const filteredRobots = robots.filter((robot) => {
    if (filter === 'All') return true;
    if (filter === 'BatteryLow') {
      if (robot.battery < 20) return true;
    }
    return filter === 'Online' ? robot.status : !robot.status;
  });

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

        <select
          style={styles.dropdown}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="BatteryLow">Low Battery</option>
        </select>

        {error && <div style={styles.errorMessage}>Error: {error}</div>}
      </div>

      <div className='dashboard' style={styles.dashboard}>
        <RobotTable robotArr={filteredRobots} />
        <div className="map-container" style={styles.mapContainer}>
          <MapScreen data={filteredRobots} />

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
    width: '100%',
    minWidth: '700px',
    height: '100%',
    backgroundColor: '#f0f0f0',
    marginbottom: '20px',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '20px',
  },
  dropdown: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
  },
};
export default App;
