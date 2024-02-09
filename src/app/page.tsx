import Image from 'next/image';
import Button from './components/Button';

import LindaCasa from '../../public/linda-casa.jpg';

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 py-20 gap-16">
          <div>
            <h1 className="font-bold text-blue-900 text-7xl mb-12 leading-tight">
              Seu próximo lar está aqui!
            </h1>

            <p className="text-2xl mb-4">
              Seja realizar realizar o sonho da casa própria, ou investir no
              ramo imobiliário, estamos pronto para te atender!
            </p>
            <p className="text-2xl mb-12">
              Entre em contato e fale com um especialista!
            </p>

            <Button
              href="https://www.google.com/"
              target="_blank"
              text="Falar com corretor"
            />
          </div>
          <div>
            <Image src={LindaCasa} alt="linda casa" width="560" height="560" />
          </div>
        </div>

        <div className="w-3/4 bg-white shadow-lg p-8 rounded-lg flex justify-between items-center border border-gray-200">
          <span>Pesquisa...</span>
          <span>Tipo</span>
          <span>Local</span>
          <Button href="/compra" text="Buscar" />
        </div>
      </div>
    </>
  );
}
