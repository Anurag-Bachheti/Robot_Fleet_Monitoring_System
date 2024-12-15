import React, { useState } from 'react';
import RobotTable from 'RobotTable';
import MapScreen from './MapScreen';

const App = () => {
  const [hoveredRobotId, setHoveredRobotId] = useState(null);

  const handleRowHover = (robotId) => {
    setHoveredRobotId(robotId);
  };

  const robotArr = [
    // Sample robot data
    { id: 1, status: true, location: { latitude: 12.931758, longitude: -7.110705 }, battery: '80%', cpuUsage: '20%', ramConsumption: '4GB', lastUpdated: '2024-12-15' },
    { id: 2, status: false, location: { latitude: 13.931758, longitude: -8.110705 }, battery: '50%', cpuUsage: '40%', ramConsumption: '2GB', lastUpdated: '2024-12-14' },
    // More robots...
  ];

  return (
    <div style={{ display: 'flex' }}>
      <RobotTable robotArr={robotArr} onRowHover={handleRowHover} />
      <MapScreen data={robotArr} hoveredRobotId={hoveredRobotId} />
    </div>
  );
};

export default App;
