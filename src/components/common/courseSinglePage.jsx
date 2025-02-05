import React from "react";
import { FaMoneyBillWave, FaChild, FaBuilding } from "react-icons/fa";

export const CourseSinglePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          Biaya <span className="text-teal-500">Preschool</span> dan{" "}
          <span className="text-teal-500">Daycare</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Biaya Preschool */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <FaChild className="text-blue-500 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Biaya Preschool
              </h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span>Pendaftaran:</span>{" "}
                <span className="font-bold text-blue-600">Rp 100.000,-</span>
              </li>
              <li>
                <span>Uang Gedung:</span>{" "}
                <span className="font-bold text-blue-600">Rp 500.000,-</span>
              </li>
              <li>
                <span>Baju Seragam:</span>{" "}
                <span className="font-bold text-blue-600">Rp 700.000,-</span>
              </li>
              <li>
                <span>Alat dan Buku:</span>{" "}
                <span className="font-bold text-blue-600">Rp 500.000,-</span>
              </li>
              <li>
                <span>SPP Bulanan:</span>{" "}
                <span className="font-bold text-blue-600">Rp 300.000,-</span>
              </li>
              <li>
                <span>Outing Class:</span>{" "}
                <span className="font-bold text-blue-600">Rp 500.000,-</span>
              </li>
            </ul>
          </div>

          {/* Biaya Daycare */}
          <div className="bg-teal-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <FaBuilding className="text-teal-500 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Biaya Daycare
              </h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span>Pendaftaran:</span>{" "}
                <span className="font-bold text-teal-600">Rp 100.000,-</span>
              </li>
              <li>
                <span>Uang Gedung:</span>{" "}
                <span className="font-bold text-teal-600">Rp 1.000.000,-</span>
              </li>
              <li>
                <span>Biaya Bulanan:</span>
                <ul className="pl-6 space-y-2">
                  <li>
                    Usia {"< 1 tahun"}:{" "}
                    <span className="font-bold text-teal-600">
                      Rp 950.000,-
                    </span>
                  </li>
                  <li>
                    Usia 12-24 bulan:{" "}
                    <span className="font-bold text-teal-600">
                      Rp 900.000,-
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <span>Biaya Mingguan:</span>{" "}
                <span className="font-bold text-teal-600">
                  Rp 450.000,- / 5 hari kerja
                </span>
              </li>
              <li>
                <span>Biaya Harian:</span>{" "}
                <span className="font-bold text-teal-600">
                  Rp 75.000,- / hari
                </span>
              </li>
              <li>
                <span>Sabtu/Ahad:</span>{" "}
                <span className="font-bold text-teal-600">
                  Sesuai kesepakatan
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="https://forms.gle/hGGP4Gy98hh21zYdA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 border border-gray-700 rounded-md text-sm bg-yellow-400 text-white mt-4"
          >
            Bergabung Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};
