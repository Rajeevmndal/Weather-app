import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "8bf126eee1f04d795d621661966df7fa"; // ← Use your valid API key

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
       console.log(res)
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const handleSearch = () => {
    getWeather();
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", width: "250px", fontSize: "16px" }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ✅ Weather display block */}
      {weather && (
        <div style={{ marginTop: "30px", border: "1px solid #ccc", padding: "20px", borderRadius: "10px", display: "inline-block" }}>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <h3>{weather.main.temp}°C</h3>
          <p><strong>{weather.weather[0].main}</strong>: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
