import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li className="hover:text-gray-300 transition duration-300"><a href="#home">Sehir Ekle</a></li>
          <li className="hover:text-gray-300 transition duration-300"><a href="#about">Sehir Listele</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
