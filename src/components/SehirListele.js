import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SehirListele = () => {

  const [sehirIlceler, setSehırIlceler] = useState([]);
  const notifyNotFoundData = () => toast("Veri Bulunamadı", { position: 'top-center' });

  useEffect(() => {
    axios.get('http://localhost:9191/sehir-ilce/listele')
      .then((response) => {
        setSehırIlceler(response.data);
        if (response.data.length === 0) {
          notifyNotFoundData();
        }
      })
      .catch((error) => {
        console.log("Aldığım veride hata var : " + error);
      });
  }, []);

  return (
    <div className='min-h-screen bg-slate-700'>
      <div className='w-[80%] mx-auto pt-32'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th scope="col" className="px-6 py-3 underline border-b border-gray-700">ID</th>
                <th scope="col" className="px-6 py-3 underline border-b border-gray-700">Şehir</th>
                <th scope="col" className="px-6 py-3 underline border-b border-gray-700">İlçe</th>
              </tr>
            </thead>
            <tbody>
              {sehirIlceler.length > 0 ? (
                sehirIlceler.map((item) => (
                  <tr key={item.id} className="hover:bg-white bg-slate-400 transition-colors">
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.sehir}</td>
                    <td className="px-6 py-4">{item.ilce}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-center">Veri Bulunamadı</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SehirListele;
