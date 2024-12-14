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
          id: element["Robot ID"],        // Correct the field name to "Robot ID"
          status: element["Online/Offline"], // Correct the field name to "Online/Offline"
          battery: element["Battery Percentage"], // Correct the field name to "Battery Percentage"
          cpuUsage: element["CPU Usage"],  // Correct the field name to "CPU Usage"
          ramConsumption: element["RAM Consumption"], // Correct the field name to "RAM Consumption"
          lastUpdated: element["Last Updated"], // Correct the field name to "Last Updated"
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
        <h1>Robot Fleet Monitoring Dashboard</h1>

        {error && <div style={styles.errorMessage}>Error: {error}</div>}
        <RobotTable robotArr={robots} />
      </div>

      <div className="map-container">
        <MapScreen data={robots} />
      </div>
    </>
  );
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
  }
};
export default App;
