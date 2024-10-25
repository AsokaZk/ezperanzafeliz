import { useState } from 'react';
import CardInformation from '../../components/CardInformation/idnex';
import { Link } from 'react-router-dom';

function Information() {
  const [activeDonate, setActiveDonate] = useState(false);

  return (
    <div className="relative flex flex-col w-screen h-full mt-24 items-center justify-center">
      <div className="">
        <CardInformation setActiveDonate={setActiveDonate} />
      </div>
      {activeDonate && (
        <div className="flex flex-col items-center mt-5">
          <h5>Opciones de dobacion</h5>
          <button
            type="button"
            className="py-2.5 px-6 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
          >
            Donacion por mes: 80 Bs
          </button>
          <p>Suscribace a cualquiera de estos tres tipos de donacion</p>
          <div className="flex gap-2">
            <Link
              type="button"
              to="/payment/0"
              className="py-2.5 px-6 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
            >
              Opcion A: por 1 año
            </Link>
            <Link
              type="button"
              to="/payment/1"
              className="py-2.5 px-6 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
            >
              Opcion B: por 2 año
            </Link>
            <Link
              type="button"
              to="/payment/2"
              className="py-2.5 px-6 text-sm border border-gray-300 rounded-lg shadow-xs bg-white font-semibold text-gray-900 transition-all duration-500 hover:bg-gray-50"
            >
              Opcion C: Hasta que Zaid cumple 18 años
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Information;
