import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pkceFlow from './auth/spotify'
import getMultipleVariables from './configs/env'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="container">
        <button onClick={() => {
          const env_variables: Record<string, string> = getMultipleVariables(['VITE_SPOTIFY_CLIENT_ID', 'VITE_SPOTIFY_REDIRECT_URI'])
          const clientId = env_variables['VITE_SPOTIFY_CLIENT_ID']
          const redirectUri = env_variables['VITE_SPOTIFY_REDIRECT_URI']
          const scope = 'user-read-private user-read-email'
          const authUrl = new URL('https://accounts.spotify.com/authorize')

          // console.log('Client ID:', clientId)
          // console.log('Redirect URI:', redirectUri)

          pkceFlow(clientId, redirectUri, scope, authUrl)
        }} className="login-spotify">
          Log in via Spotify
        </button>

      </div>
    </>
  )
}

export default App
