# Robot Fleet Monitoring Dashboard

## Objective
Developed a Fleet Monitoring Dashboard to visualize the status and telemetry data of multiple robots, enabling real-time insights.

## Table of Contents
1. [Objective](#objective)
2. [Features](#features)
3. [Backend](#backend)
4. [Frontend](#frontend)
5. [Bonus Features](#bonus-features)
6. [Usage Instructions](#usage-instructions)
7. [Dependencies](#dependencies)
8. [Conclusion](#conclusion)

## Features
- **Robot Details:**
  - Displayed a list of robots with the following attributes:
    - **Robot ID:** Unique identifier (UUID).
    - **Online/Offline Status:** Indicated using a Boolean.
    - **Battery Percentage:** Displayed as an integer.
    - **CPU Usage:** Monitored as a percentage (integer).
    - **RAM Consumption:** Represented as a percentage (integer).
    - **Last Updated Timestamp:** Timestamp of the latest update.
    - **Location Coordinates:** Latitude and longitude (float, float).
  
- **Real-Time Updates:**
  - Implemented periodic polling every 5 seconds to ensure real-time data updates.

- **Map View:**
  - Integrated a map using **Leaflet.js** to visualize the current positions of the robots.
  - Used distinct markers for robots:
    - Green markers for online robots.
    - Red markers for offline robots.
    - Highlighted robots with low battery using icons.

- **Filter Options:**
  - Added filters at the top of the dashboard to allow sorting and viewing robots based on:
    - All robots.
    - Online robots.
    - Offline robots.
    - Robots with low battery.

## Backend
- Built the backend using **FastAPI** to simulate and manage robot data.
- Generated mock telemetry data, including:
  - Battery percentage.
  - CPU usage.
  - RAM consumption.
  - Position coordinates (latitude and longitude).
- Exposed a REST API to serve real-time updates to the frontend.

## Frontend
- Developed the frontend using **React.js** to create a clean and responsive dashboard.
- Features:
  - Displayed robot details in a tabular format.
  - Integrated the map view for visualizing robot positions.
  - Dynamically updated robot status and telemetry data in real-time.
  - Applied color coding and icons to distinguish robots based on:
    - Online/Offline status.
    - Battery levels (highlighted low battery robots).

## Bonus Features
- Implemented a filter bar with options to:
  - View all robots.
  - Filter online robots.
  - Filter offline robots.
  - View robots with low battery.

## Usage Instructions
1. **Backend Setup:**
   - Clone the repository
   - Install dependencies and start the server by running:
   ```
   cd '.\Backend\' ; pip install -r requirements.txt ;  uvicorn server:app --reload
   ```
   <!-- - Navigation Path=> 
   - Install dependencies using `pip install -r requirements.txt`.
   - Run the FastAPI server using `uvicorn server:app --reload`. -->

2. **Frontend Setup:**
   - Clone the repository
   - Install dependencies and start the server by running:
   ```
   cd '.\Frontend\' ; npm i ; npm run dev
   ```

3. **Access the dashboard at `http://localhost:5173`.**

## Dependencies
- **Backend:**
  - FastAPI
  - Uvicorn

- **Frontend:**
  - React.js
  - Leaflet.js

## Conclusion
This project demonstrates the integration of a real-time backend with a responsive frontend to monitor and manage a fleet of robots effectively. The use of filters and visual indicators ensures that users can quickly identify critical statuses and make informed decisions.