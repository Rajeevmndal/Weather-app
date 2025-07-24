<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Weather-app
>>>>>>> 7b87d0122a08c91f028f078e225904799799dce1
>>>>>>> # 🌦 Weather App

A simple and responsive Weather App built using **React** and the **OpenWeatherMap API**. This app allows users to enter a city name and fetch real-time weather data, including temperature and conditions.

---

## 📚 What I Learned

### 🌐 1. Working with APIs
- Learned how to fetch data from a third-party API using `fetch()`.
- Understood how to handle query parameters like `q`, `appid`, and `units` for API requests.
- Practiced checking response status (`res.ok`) and handling errors like "City not found".

### ⚙️ 2. Async and Await in JavaScript
- Understood the purpose of `async` and `await` for handling asynchronous operations.
- Learned that `await` pauses the function until the Promise resolves, without blocking the main thread.
- Recognized how JavaScript can continue executing other tasks (like UI rendering) while waiting.

### 🧠 3. Error Handling with Try/Catch
- Used `try...catch` blocks to gracefully handle errors during the API call.
- Displayed custom error messages to users (e.g., "City not found") if the fetch fails.

### 🧰 4. React Hooks (`useState`)
- Practiced using `useState()` to manage dynamic state:
  - `city`: to store the user's input.
  - `weather`: to store weather data returned by the API.
  - `error`: to store and show any error messages.
  
### 🏗 5. Conditional Rendering
- Implemented conditional rendering to:
  - Show weather data only after successful fetch.
  - Display error messages only when there’s a problem.
  - Prevent empty API calls using `if (!city) return;`.

### 🔄 6. Input Handling
- Captured user input from a text field and used it to trigger the API request.

---

## 💡 Key Features
- Real-time weather updates.
- Error handling for invalid cities or network issues.
- Clean, minimal UI using basic HTML and CSS in React components.

---

## 🔑 Technologies Used
- React (Functional Components)
- JavaScript (ES6+ features like `async/await`, `try/catch`)
- OpenWeatherMap API
- HTML, CSS (Basic styling)

---

## 🚀 How to Run
1. Clone the repository.
2. Run `npm install`.
3. Replace `apiKey` with your own API key from OpenWeather.
4. Run `npm start` to launch the app.

---

## 📌 Future Improvements
- Add support for hourly and weekly forecasts.
- Auto-suggest cities using geolocation or autocomplete.
- Improve styling with CSS frameworks like Tailwind or Bootstrap.

---

## 🧑‍💻 Developed By
**Rajiv Kumar**


