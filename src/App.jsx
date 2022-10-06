import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Pokedex from './assets/components/Pokedex'
import PokemonDetail from './assets/components/PokemonDetail'
import ProtectedRoutes from './assets/components/ProtectedRoutes'
import UserInput from './assets/components/UserInput'
import pokeball from './assets/img/pokeball.png'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <section pokeball>
          <img src={pokeball} alt="" className='rotate rotate-1'/>
          <img src={pokeball} alt="" className='rotate rotate-2'/>
        </section>

        <Routes>
          <Route path="/" element={<UserInput />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
