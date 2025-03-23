// Get user inputs (assuming you have input fields for prompt and distance)
const distance = document.getElementById("distance").value;
const prompt = document.getElementById("prompt").value; // Example: Taxi ride details input field

// Define the API URL dynamically
const apiUrl = `https://carbon-footprint-calculator.p.rapidapi.com/api/v1/estimates/commute?prompt=${encodeURIComponent(prompt)}&distance=${distance}`;

// Define API key and headers for authentication
const headers = {
    "x-rapidapi-host": "carbon-footprint-calculator.p.rapidapi.com",
    "x-rapidapi-key": "7b192f309cmshd13fe8af9534664p1fb6f8jsn2c896e0a78c2"
};

// Fetch data from the API
fetch(apiUrl, { headers: headers })
    .then(response => response.json())
    .then(data => {
        // Assuming the API returns carbon emissions data in this structure
        const emission = data.emission;
        const unit = data.unit;

        // Display the result to the user
        const results = document.getElementById("results");
        results.innerHTML = `
            <h3>Carbon Emissions</h3>
            <p>For traveling ${distance} km with the following details: ${prompt}, the carbon emissions are:</p>
            <p><strong>${emission} ${unit}</strong></p>
        `;
        results.style.display = "block";
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
        alert("An error occurred while fetching data. Please try again later.");
    });

