import './App.css';

// reaproveitar components routers v6 com o Outlet
import { Outlet } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '120px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
