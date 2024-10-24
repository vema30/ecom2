import './App.css';
import NavBar from './components/NavBar'; // Correct capitalization
import Home from './pages/Home';          // Ensure correct capitalization of the file name
import Cart from './pages/Cart';          // Ensure correct capitalization of the file name
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
