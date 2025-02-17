export default async function handler(req, res) {
    // Get city from frontend request
    const { city } = req.query;
  
    // Get the API key from environment variable
    const apiKey = process.env.key; // API key will be securely stored in Vercel's environment variables
  
    // Construct the API request URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      // Fetch data from OpenWeather API
      const response = await fetch(url);
      const data = await response.json();
  
      // Return weather data to the frontend
      res.status(200).json(data);
    } catch (error) {
      // Handle error if the API request fails
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }