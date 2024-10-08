import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const onClickHandler = () =>{
        navigate('/')
    }

    return (
        <div className="bg-blue-500 text-white">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold cursor-pointer" onClick={()=>onClickHandler()}>Mavidev</h1>
                <ul className="flex space-x-4">
                    <button onClick={() => navigate('/')} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 ">
                        Anasayfa
                    </button>
                    <button onClick={() => navigate('sehir-ilce-ekle')} type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5">
                        Şehir-İlçe Ekle
                    </button>
                    <button onClick={() => navigate('sehir-listele')} type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5">
                        Şehir-İlçe Listele
                    </button>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
