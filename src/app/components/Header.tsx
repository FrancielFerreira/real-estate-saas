import React from 'react';
import Link from 'next/link';
import Button from './Button';

export default function Header() {
  return (
    <header className="shadow-md p-4 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-gray-700 hover:text-gray-900 text-xl font-bold">
          <Link href="/">Logo</Link>
        </h1>

        <nav className="flex space-x-4">
          <Link
            className="font-semibold text-blue-900 hover:text-blue-600"
            href="/compra"
          >
            Compra
          </Link>
          <Link
            className="font-semibold text-blue-900 hover:text-blue-600"
            href="/venda"
          >
            Venda
          </Link>
          <Link
            className="font-semibold text-blue-900 hover:text-blue-600"
            href="/aluguel"
          >
            Aluguel
          </Link>
        </nav>

        <Button
          href="https://www.google.com"
          text="Fale com um corretor"
          target="_blank"
        />
      </div>
    </header>
  );
}
