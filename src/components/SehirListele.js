import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SehirListele = () => {

  const [sehirIlceler, setSehırIlceler] = useState([]);

  const notifySuccess = () => toast(`Hepsi temizlendi.`, { position: 'bottom-right' });


  const buttonHandler = (id) =>{
    axios.delete(`http://localhost:9191/sehir-ilce/sil/${id}`)
    .then((res)=>{
      setSehırIlceler(sehirIlceler.filter((item) => item.id !== id))
    }).catch((err)=>{
      console.log("Error var silmede.")
    })
  }

  const hepsiniTemizleHandler = () =>{
    axios.delete('http://localhost:9191/sehir-ilce/sil/hepsi')
    .then((response)=>{
      setSehırIlceler([])
      notifySuccess()
    }).catch((err)=>{
      console.log("Hepsi silme başarısız.")
    })
  }


  useEffect(() => {
    axios.get('http://localhost:9191/sehir-ilce/listele')
      .then((response) => {
        setSehırIlceler(response.data);
        console.log("DEGER : " , response.data)
      })
      .catch((error) => {
        console.log("Aldığım veride hata var : " + error);
      });
  }, []);

  return (
    <div className='min-h-screen bg-slate-700'>
      <div className='w-[80%] mx-auto pt-32'>
      {sehirIlceler.length > 0 && (
          <div className='flex justify-end'>
            <button 
              onClick={hepsiniTemizleHandler}
              className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center"
            >
              Hepsini Temizle
            </button>
          </div>
        )}
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th scope="col" className="px-6 py-3 underline text-center border-b border-gray-700">Sıra</th>
                <th scope="col" className="px-6 py-3 underline text-center border-b border-gray-700">ID</th>
                <th scope="col" className="px-6 py-3 underline text-center border-b border-gray-700">Şehir</th>
                <th scope="col" className="px-6 py-3 underline border-b text-center border-gray-700">İlçe</th>
                <th scope="col" className="px-6 py-3 underline border-b text-center border-gray-700">Nufus</th>
                <th scope="col" className="px-6 py-3 underline border-b text-center border-gray-700">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {sehirIlceler.length > 0 ? (
                sehirIlceler.map((item,i) => (
                  <tr key={item.id} className="hover:bg-white bg-slate-400 transition-colors">
                    <td className="px-6 text-center py-4">{i + 1}</td>
                    <td className="px-6 text-center py-4">{item.id}</td>
                    <td className="px-6 text-center py-4">{item.sehir}</td>
                    <td className="px-6 text-center py-4">{item.ilce}</td>
                    <td className='text-center'>
                      <button
                        type="submit"
                        onClick={()=>buttonHandler(item.id)}
                        className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center"
                      >
                        Sil
                      </button>
                      </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='5' className="px-6 py-6 font-bold text-center text-[2xl] text-gray-100">Veri Bulunamadı</td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
      <ToastContainer />

    </div>
  );
}

export default SehirListele;
