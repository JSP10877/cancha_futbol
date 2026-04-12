import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Canchas from './pages/Canchas';
import Reservar from './pages/Reservar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canchas" element={<Canchas />} />
        <Route path="/reservas" element={<Reservar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;