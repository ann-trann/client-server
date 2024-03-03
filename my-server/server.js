const cors = require('cors');


// Import required modules
const express = require('express');


// Create an Express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a route
app.get('/weather', (req, res) => {
    const { city, date } = req.query

    if (city == "TpHoChiMinh")
    {
        return res.send({
            temperature: '36°C',
            description: 'Sunny'
        })
    }
    if (city == "HaNoi")
    {
        return res.send({
            temperature: '20°C',
            description: 'Foggy'
        })
    } 
    if (city == "DaNang")
    {
        return res.send({
            temperature: '25°C',
            description: 'Rainy'
        })
    }
});


// Set the port for the server to listen on
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
