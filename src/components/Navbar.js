import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-blue-500 text-white">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>Mavidev</h1>
                <ul className="flex space-x-4">
                    <button onClick={() => navigate('/')} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Anasayfa
                    </button>
                    <button onClick={() => navigate('sehir-ilce-ekle')} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Sehir-İlce Ekle
                    </button>
                    <button onClick={() => navigate('sehir-listele')} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Sehir-İlce Listele
                    </button>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
