import React from 'react';
import ReactDOM from 'react-dom/client';

// pages
import Home from './pages/Home/Home.jsx';
import Page404 from './pages/Page404/Page404.jsx';
import Aluguel from './pages/Aluguel/Aluguel.jsx';
import Compra from './pages/Compra/Compra.jsx';
import Venda from './pages/Venda/Venda.jsx';
import Imoveis from './pages/Imoveis/Imoveis.jsx';
import App from './App.jsx';

// routers v6
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Page404 />, // página de erro 404
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/compra',
        element: <Compra />,
      },
      {
        path: '/aluguel',
        element: <Aluguel />,
      },
      {
        path: '/venda',
        element: <Venda />,
      },
      {
        path: '/imoveis/*',
        element: <Imoveis />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
);
