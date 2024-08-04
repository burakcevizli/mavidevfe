import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SehirListele = () => {

    const [sehirIlceler, setSehırIlceler] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9191/sehir-listele').then((response) => {
            setSehırIlceler(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log("Aldığım veride hata var : " + error);
        });
    }, []);

    return (
        <div className='w-[80%] mx-auto mt-32'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700">
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
                                <tr key={item.id} className="hover:bg-gray-200 transition-colors duration-200">
                                    <td className="px-6 py-4 border-b border-gray-300">{item.id}</td>
                                    <td className="px-6 py-4 border-b border-gray-300">{item.sehir}</td>
                                    <td className="px-6 py-4 border-b border-gray-300">{item.ilce}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="px-6 py-8 text-center text-gray-600">Veri bulunamadı</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SehirListele;
