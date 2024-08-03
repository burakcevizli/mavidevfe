import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-500 over text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Mavidev</div>
        <ul className="flex space-x-4">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Sehir-İlce Ekle
          </button>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Sehir-İlce Listele
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
