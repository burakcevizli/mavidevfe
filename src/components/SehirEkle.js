import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SehirEkle = () => {
  const [sehir, setSehir] = useState('');
  const [ilce, setIlce] = useState('');
  const [nufus, setNufus] = useState(null);

  const notifySuccess = () => toast(`${sehir} - ${ilce} başarıyla eklendi.`, { position: 'bottom-right' });
  const notifyError = (message) => toast.error(message, { position: 'bottom-right' });

  const handleCityChange = (e) => {
    const secilenSehir = e.target.value;
    setSehir(secilenSehir);
    setIlce('');
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:9191/sehir-ilce/ekle', { sehir, ilce })
      .then((response) => {
        notifySuccess();
      })
      .catch((error) => {
        notifyError("Bir hata oluştu: " + error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700">
      <div className="bg-slate-400 p-8 rounded-lg mb-32 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Şehir ve İlçe Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="sehir" className="block mb-2 text-sm font-medium text-gray-900">Şehir</label>
            <input
              id="sehir"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder='Lütfen Şehir Giriniz'
              onChange={handleCityChange}
              required
              autoFocus
              pattern="[A-Za-zÇŞĞÜÖİçşğüöı\s]+"
            >
            </input>
          </div>
          <div className="mb-6">
            <label htmlFor="ilce" className="block mb-2 text-sm font-medium text-gray-900">İlçe</label>
            <input
              id="ilce"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder='Lütfen İlçe Giriniz'
              onChange={(e) => setIlce(e.target.value)}
              required
              pattern="[A-Za-zÇŞĞÜÖİçşğüöı\s]+"
            >
            </input>
          </div>
          {/* <div className="mb-6">
            <label htmlFor="ilce" className="block mb-2 text-sm font-medium text-gray-900">Nufus</label>
            <input
              id="ilce"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder='Lütfen Nufus Giriniz'
              onChange={(e) => setNufus(e.target.value)}
              required
            >
            </input>
          </div> */}
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center"
          >
            Ekle
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SehirEkle;
