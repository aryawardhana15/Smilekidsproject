

import React from 'react';

export const CourseSinglePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Biaya Preschool dan Daycare</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Biaya Preschool</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Pendaftaran: <span className="font-semibold">Rp 100.000,-</span></li>
            <li>Uang Gedung: <span className="font-semibold">Rp 500.000,-</span></li>
            <li>Baju Seragam: <span className="font-semibold">Rp 700.000,-</span></li>
            <li>Alat dan Buku: <span className="font-semibold">Rp 500.000,-</span></li>
            <li>SPP Bulanan: <span className="font-semibold">Rp 300.000,-</span></li>
            <li>Outing Class: <span className="font-semibold">Rp 500.000,-</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Biaya Daycare</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Pendaftaran: <span className="font-semibold">Rp 100.000,-</span></li>
            <li>Uang Gedung: <span className="font-semibold">Rp 1.000.000,-</span></li>
            <li>Biaya Bulanan:</li>
            <ul className="pl-6 space-y-2">
              <li>Usia {'< 1 tahun'}: <span className="font-semibold">Rp 950.000,-</span></li>
              <li>Usia 12-24 bulan: <span className="font-semibold">Rp 900.000,-</span></li>
              <li>Usia {`< 1 tahun`}: <span className="font-semibold">Rp 950.000,-</span></li>

            </ul>
            <li>Biaya Mingguan: <span className="font-semibold">Rp 450.000,- / 5 hari kerja</span></li>
            <li>Biaya Harian: <span className="font-semibold">Rp 75.000,- / hari</span></li>
            <li>Sabtu/Ahad: <span className="font-semibold">Sesuai kesepakatan</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};


