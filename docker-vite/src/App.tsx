import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dockerLogo from '/docker.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="logo-row">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.docker.com/" target="_blank">
          <img src={dockerLogo} className="logo docker" alt="Docker logo" />
        </a>
      </div>

      <h1>Vite + React + Docker</h1>
     
    </>
  )
}

export default App
