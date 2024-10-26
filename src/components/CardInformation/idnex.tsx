import { useParams } from 'react-router-dom';
import data from '../../db/data.json';
import moment from 'moment';

interface CardInformationProps {
  setActiveDonate: (b: boolean) => void;
}

function formatDate(dateString?: string) {
  if (dateString == undefined) return;
  moment.locale('es');
  return moment(dateString, 'DD/MM/YYYY').format('D [de] MMMM [de] YYYY');
}

function CardInformation(props: CardInformationProps) {
  let { id } = useParams();

  const item = data.find((item) => item.id.toString() == id);
  const date = formatDate(item?.date);

  return (
    <div className="relative mt-5 flex flex-col items-center border border-solid border-gray-200 rounded-2xl transition-all duration-500 md:flex-row max-w-xl ">
      <div className="block overflow-hidden w-96 ">
        <img src={`/img/${item?.id}.jpg`} alt={item?.name} className="h-full rounded-2xl object-cover" />
      </div>
      <div className="p-4">
        <h4 className="text-base font-semibold text-gray-900 mb-2 transition-all duration-500 ">
          Conoce a {item?.name}!
        </h4>
        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
          {item?.information}
          <br />
          <strong>Edad:</strong> {' ' + item?.age} <br />
          <strong>Fecha de nacimiento:</strong>
          {' ' + date}
          <br />
          <strong>Genero:</strong> {' ' + item?.gender}
        </p>
        <button
          className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold"
          onClick={() => props.setActiveDonate(true)}
        >
          Elige ser amigo de {item?.name}
        </button>
      </div>
    </div>
  );
}

export default CardInformation;
