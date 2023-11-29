import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home/Home';
import Aluguel from './pages/Aluguel/Aluguel';
import Compra from './pages/Compra/Compra';
import Venda from './pages/Venda/Venda';
import Imoveis from './pages/Imoveis/Imoveis';
import Page404 from './pages/Page404/Page404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aluguel/*" element={<Aluguel />} />
          <Route path="/compra/*" element={<Compra />} />
          <Route path="/venda/*" element={<Venda />} />
          <Route path="/imoveis/*" element={<Imoveis />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
