# Carbon-Footprint-Calculator.

This project is a simple web-based tool that estimates carbon emissions based on transportation details provided by the user. The tool uses the Carbon Footprint Calculator API to calculate the carbon emissions for different modes of transportation over a specified distance.

## Features

- Users can input details about their transportation (e.g., taxi ride) and the distance they are traveling.
- The tool fetches carbon emission data from the Carbon Footprint Calculator API.
- It displays the estimated carbon emissions and the corresponding unit.

## API Used

- **Carbon Footprint Calculator API**: This API calculates the carbon footprint based on transportation details such as type and distance.
  
### API Documentation

- Base URL: `https://carbon-footprint-calculator.p.rapidapi.com/api/v1/estimates/commute`
- Query parameters:
  - `prompt`: Description of the transportation (e.g., "Taxi ride from Dubai Marina to Sharjah Airport").
  - `distance`: Distance of the travel (in kilometers).
- Authentication:
  - `x-rapidapi-host`: carbon-footprint-calculator.p.rapidapi.com
  - `x-rapidapi-key`: ''

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OgayoTK1/carbon-footprint-calculator.git
   cd carbon-footprint-calculator.

