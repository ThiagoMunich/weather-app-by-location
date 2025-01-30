
https://github.com/user-attachments/assets/d2782fe8-2d85-4c51-94bb-106eeab5a152

## Overview
Sujeito Programador - Weather App is a simple weather application that allows users to check real-time weather information for different locations. The app is built using React and integrates with a weather API to fetch current weather data.

## Features
- Search for weather by city name
- Display current temperature, humidity, and weather conditions
- Responsive design for desktop and mobile users
- API integration for real-time weather updates

## Tech Stack
- **Frontend:** React, CSS, Axios
- **API:** OpenWeatherMap API (or another weather API service)

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/ThiagoMunich/SujeitoProgramador-tempo.git
cd SujeitoProgramador-tempo
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```
Replace `your_api_key_here` with your actual API key from OpenWeatherMap or the respective weather API service used.

### Start the Development Server
```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## Usage
1. Enter a city name in the search bar.
2. View the current weather details for the entered location.
3. Refresh the page or search for another city.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

