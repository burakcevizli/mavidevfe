import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SehirListele = () => {

    const [sehirIlceler, setSehırIlceler] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9191/sehir-listele').then((response) => {
            setSehırIlceler(response.data);
            console.log(response.data)
        }).catch((error) => {
            console.log("Aldığım veride hata var : " + error)
        })
    }, [])

    return (
        <div className='w-[80%] mx-auto mt-32'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-black">
            <thead className="text-xs uppercase bg-slate-400">
              <tr>
                <th scope="col" className="px-6 py-3 underline">Şehir</th>
                <th scope="col" className="px-6 py-3 underline">İlçe</th>
              </tr>
            </thead>
            <tbody>
              {sehirIlceler.length > 0 ? (
                sehirIlceler.map((item) => (
                  <tr key={item.id} className="bg-blue-500 border-b">
                    <td className="px-6 py-4 font-medium whitespace-nowrap">{item.sehir}</td>
                    <td className="px-6 py-4">{item.ilce}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-6 py-4 text-center text-gray-600">Veri bulunamadı</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default SehirListele