// Mock Weather API (Replace with OpenWeatherMap/Agro API)
function fetchWeather() {
    const weatherData = document.getElementById("weather-data");
    weatherData.innerHTML = `
        <p><strong>Today:</strong> ☀️ Sunny, 28°C</p>
        <p><strong>Tomorrow:</strong> ⛅ Partly Cloudy, 26°C</p>
        <p><strong>Rain Prediction:</strong> 10% chance in 3 days</p>
    `;
}

// AI-Based Crop Suggestions (Mock for now, use TensorFlow/Agro API)
function getCropSuggestions() {
    const location = document.getElementById("location").value;
    const cropSuggestion = document.getElementById("crop-suggestion");
    
    if (!location) {
        cropSuggestion.innerHTML = "<p>Please enter a location.</p>";
        return;
    }

    // Simulate AI response (replace with real API)
    const crops = ["Rice", "Wheat", "Corn", "Soybean"];
    const bestCrop = crops[Math.floor(Math.random() * crops.length)];
    
    cropSuggestion.innerHTML = `
        <p><strong>Best Crop for ${location}:</strong> ${bestCrop}</p>
        <p><strong>Planting Tip:</strong> Sow in well-drained soil with moderate water.</p>
    `;
}

// Market Trends (Replace with agricultural API)
document.addEventListener("DOMContentLoaded", () => {
    const marketTrends = document.getElementById("market-trends");
    marketTrends.innerHTML = `
        <p><strong>Wheat:</strong> ₹2,100/quintal (↑5%)</p>
        <p><strong>Rice:</strong> ₹1,850/quintal (↓2%)</p>
        <p><strong>Tomato:</strong> ₹60/kg (↑10%)</p>
    `;
});

// AI Chatbot (Use OpenAI API / Dialogflow)
function askAI() {
    const question = document.getElementById("ai-question").value;
    const aiResponse = document.getElementById("ai-response");
    
    if (!question) {
        aiResponse.innerHTML = "<p>Ask a question about farming!</p>";
        return;
    }

    // Simulate AI response (replace with OpenAI API)
    const responses = [
        "Use organic fertilizers for better yield.",
        "Check for pests like aphids if leaves are yellow.",
        "Water twice daily in summer.",
        "Harvest in 90-120 days for best results."
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    aiResponse.innerHTML = `<p><strong>AI Suggests:</strong> ${randomResponse}</p>`;
}