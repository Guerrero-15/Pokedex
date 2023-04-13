import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pokedex from './pages/Pokedex'
import Home from './pages/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokedexInfo from './pages/PokeInfo'

function App() {

  /*Para este proyecto se necesita del uso de REACT ROOTER DOM quien nos 
  apoyará a crear rutas dentro de nuestra misma página web
  para poder instalarlo usamos npm i react-router-dom
  De igual manera tenemos que tene r
  npm install react-redux
  que es el React Tedux para hacer los useStates globales 
  npm install @reduxjs/toolkit
  Para crear los slices
  */


  /*
  FUNCIONALIDADES
  Inpunt o buscador poder acceder al POKEINFO (En el 3)
  Filtrador por Tipo de Pokemon
  
  COMPONENTES
  
  1. INPUTNAME 
  2. POKEDEX COMPLETA RENDERIZADO LOS POKEMONS 
  3. INFORMACI[ON DE EL POKEMON SELECCIONADO ES ES POR MEDIO DEL ID
  
  
  */



  return (



    <div>


{/*Componete header que se quede fijo */}
      <p>Esto no importa en que pagina o vista este siempre estará arriba</p>

      <Routes>

        <Route path="/" element={<Home />} />


        <Route element={<ProtectedRoutes />} >


          <Route path="/pokedex" element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexInfo />} />
        </Route>

      </Routes>

      <footer>
        <h3>Hola SOY EL FOOTER, falta agregarte el footer</h3>
      </footer>

    </div >

  )
}

export default App
