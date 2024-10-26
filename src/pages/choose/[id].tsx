import { useState } from 'react';
import CardInformation from '../../components/CardInformation/idnex';
import { Link, useParams } from 'react-router-dom';
import data from '../../db/data.json';

function Information() {
  const [activeDonate, setActiveDonate] = useState(false);

  let { id } = useParams();

  const item = data.find((item) => item.id.toString() == id);

  return (
    <div className="relative flex flex-col w-screen h-full mt-24 items-center justify-center">
      <div className="">
        <CardInformation setActiveDonate={setActiveDonate} />
      </div>
      {activeDonate && (
        <div className="flex flex-col gap-3 items-center mt-5">
          <h5>Opciones de dobacion</h5>
          <button
            type="button"
            className="py-2.5 px-6 text-sm rounded-lg border border-solid border-gray-200 text-gray-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-900 hover:text-white"
          >
            Donacion por mes: 80 Bs
          </button>
          <p>Suscribace a cualquiera de estos tres tipos de donacion</p>
          <div className="flex gap-2">
            <Link
              type="button"
              to="/payment/0"
              className="py-2.5 px-6 text-sm rounded-lg border border-solid border-gray-200 text-gray-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-900 hover:text-white"
            >
              Opcion A: por 1 año
            </Link>
            <Link
              type="button"
              to="/payment/1"
              className="py-2.5 px-6 text-sm rounded-lg border border-solid border-gray-200 text-gray-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-900 hover:text-white"
            >
              Opcion B: por 2 año
            </Link>
            <Link
              type="button"
              to="/payment/2"
              className="py-2.5 px-6 text-sm rounded-lg border border-solid border-gray-200 text-gray-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-900 hover:text-white"
            >
              Opcion C: Hasta que {item?.name} cumpla 18 años
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Information;
