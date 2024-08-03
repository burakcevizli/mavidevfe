import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/sehir-ilce-ekle')
    }

    return (
        <div className="flex items-center justify-center h-screen  bg-gradient-to-r from-blue-800 to-indigo-800">
            <div className="text-center text-white p-10 bg-opacity-75 bg-black rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold my-4 animate-bounce">Mavidev Sunum Projeme Hoşgeldiniz...</h1>
                <div className='flex flex-col gap-4'>
                    <p className="text-xl">Sehir ekleme ve listeleme ekranlarını görüntüleyeceksiniz.</p>
                    <p className="text-xl">Görüntülemek istediğiniz seçeneği butona bastıktan sonra seçebilirsiniz.</p>
                </div>
                <button onClick={() => onClickHandler()} className="mt-8 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold">
                    Bir Sehir ve İlce Eklemek için tıklayın
                </button>
            </div>
        </div>

    );
};

export default WelcomePage;
