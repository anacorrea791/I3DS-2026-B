import { Route, Routes } from 'react-router';
import './App.css';

import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Header from './components/header/Header'
import Contato from './pages/Contato'
import NãoEncontrado from './pages/NãoEncontrado';
import Rodape from './components/rodape/Rodape'

function App() {
  

  return (
    <>
    <Header />
    
    <div className='containerApp'>
     <Routes> {/* Identifica todas as rotas do sistema  */}
      <Route path = "/" element={<Home />} />
      <Route path = "/sobre" element={<Sobre />} /> {/* uma rota do sistema */}
      <Route path = "/contato" element={<Contato />} />
      <Route path = "/nãoencontrado" element={<NãoEncontrado />} />
     </Routes>
     </div>

      <Rodape >Ana clara</Rodape>
    </>
  );
}

export default App
