
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import Home from './pages/Home';

function App() {


  const routes = 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
  </Routes>
          
          

  return (
    <>
        {routes}
    </>
  )
}

export default App
