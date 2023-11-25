import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import Rent from './pages/Rent/Rent';
import Buy from './pages/Buy/Buy';
import Sell from './pages/Sell/Sell';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent/*" element={<Rent />} />
          <Route path="/buy/*" element={<Buy />} />
          <Route path="/sell/*" element={<Sell />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
