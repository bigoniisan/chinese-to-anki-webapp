import './App.css'
import { useEffect, useState } from 'react';

/** 
 * Main root React component.
 * Acts as the top-level UI component, composing other components/pages.
 * Typical Contents:
Layouts (e.g., Navbar, Footer).
React Router configuration (<Routes>).
Global state providers (Context, Redux, etc.).
 */

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching:", error))
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/")
  //     .then((response) => setData(response.data))
  //     // .then((response) => response.json())
  //     // .then((data) => setData(data))
  //     .catch((error) => console.error("API Fetch Error:", error)); // Log error
  // }, []);

  return (
    <>
      <h1>FastAPI Test</h1>
      <p>{data ? JSON.stringify(data) : "Loading..."}</p>
    </>
  )
}

export default App
