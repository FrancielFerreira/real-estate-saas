import React from 'react';

const Teste = ({ texto }) => {
  return <p>{texto}</p>;
};

const Venda = () => {
  const [texto, setTexto] = React.useState('');
  function changeText(e) {
    e.preventDefault();
    const selectBtn = e.target.id;
    if (selectBtn === 'p1') {
      setTexto('p1: novo vazio');
    } else {
      setTexto('p2: novo vazio');
    }
  }
  return (
    <div style={{ marginTop: '200px' }}>
      <button id="p1" onClick={changeText}>
        Produto 1
      </button>
      <button id="p2" onClick={changeText}>
        Produto 2
      </button>

      <Teste texto={texto} />
    </div>
  );
};

export default Venda;
