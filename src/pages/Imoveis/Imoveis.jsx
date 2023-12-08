import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Imovel1 from './Imovel1';
import Imovel3 from './Imovel3';
import Imovel2 from './Imovel2';

const Imoveis = () => {
  return (
    <div className="container">
      <h1>Imoveis</h1>
      <nav>
        <Link to="">Imóvel 1</Link>
        <Link to="editar">Imóvel 2</Link>
        <Link to="criar">Imóvel 3</Link>
      </nav>

      <Routes>
        <Route path="" element={<Imovel1 />} />
        <Route path="editar" element={<Imovel2 />} />
        <Route path="criar" element={<Imovel3 />} />
      </Routes>
    </div>
  );
};

export default Imoveis;
