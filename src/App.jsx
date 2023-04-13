import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pokedex from './pages/Pokedex'
import Home from './pages/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokedexInfo from './pages/PokeInfo'

function App() {

  return (
    <div>
     <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'purple' }}>¡Atrápalos a todos!</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexInfo />} />
        </Route>
      </Routes>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        marginTop: '2.5em'
      }}>
        <h3 style={{ color: 'purple', fontFamily: 'Arial, sans-serif', fontSize: '2.0em' }}>¡Bienvenido a la Pokedex!</h3>
        <p style={{ color: 'orange', fontFamily: 'Arial, sans-serif', fontSize: '1.2em' }}>Encuentra todos los Pokémon y conviértete en el mejor entrenador.</p>
      </footer>
      
    </div >
  )
}

export default App;