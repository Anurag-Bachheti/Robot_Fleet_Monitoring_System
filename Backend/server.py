from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import json

app = FastAPI()

# Define the structure of the robot data using Pydantic
class Robot(BaseModel):
    Robot_ID: str
    Online_Offline: bool
    Battery_Percentage: int
    CPU_Usage: int
    RAM_Consumption: int
    Last_Updated: str
    Location_Coordinates: List[float]

# Function to read robot data from the JSON file
def load_robot_data():
    with open('robot_data.json', 'r') as file:
        return json.load(file)

# Function to save updated robot data to the JSON file
def save_robot_data(data):
    with open('robot_data.json', 'w') as file:
        json.dump(data, file, indent=4)

# GET endpoint to retrieve current robot data
@app.get("/robots/")
async def get_robot_data():
    try:
        data = load_robot_data()  # Load data from the JSON file
        return data
    except Exception as e:
        return {"error": str(e)}

# POST endpoint to receive new robot data and update the file
@app.post("/update-robots/")
async def update_robot_data(robot: Robot):
    data = load_robot_data()
    
    # Convert Pydantic model to dictionary and append to the data list
    data.append(robot.dict())
    
    # Save the updated data back to the file
    save_robot_data(data)
    
    print("Received new robot data:", robot)
    return {"message": "Data received and logged successfully"}

from fastapi.middleware.cors import CORSMiddleware

# Allow all origins for now
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all domains (for development purposes)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

