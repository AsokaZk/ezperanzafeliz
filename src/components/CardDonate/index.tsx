import { Link } from 'react-router-dom';

interface Item {
  item: {
    name: string;
    img: string;
    id: number;
    information: string;
  };
}

function CardDonate(props: Item) {
  return (
    <>
      <div className="relative flex items-center justify-center h-">
        <div className="group bg-white shadow-lg shadow-gray-200 rounded-xl p-2.5 transition-all duration-500 w-72 hover:shadow-gray-300">
          <div className="rounded-2xl ">
            <img
              src={`/img/${props.item.img}.jpg`}
              alt="image"
              className="rounded-xl w-full h-72 relative object-cover z-10 shadow-lg shadow-stone-300"
            />
          </div>
          <div className="flex flex-col items-center justify-center py-2 px-4 gap-1 text-center">
            <div className="flex flex-col items-center justify-center py-3 gap-2 text-center">
              <h4 className="font-manrope font-bold text-xl text-gray-900 text-center">{props.item.name}</h4>
              <p className="text-base font-medium text-gray-500 text-center h-32">{props.item.information}</p>
            </div>

            <Link
              to={`/payment/donate/${props.item.id}`}
              className="rounded-lg py-2.5 px-6 text-center w-full text-white bg-amber-500/90 font-semibold text-lg transition-all duration-500 hover:bg-indigo-700"
            >
              Donar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDonate;
