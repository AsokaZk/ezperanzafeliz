interface CardInformationProps {
  setActiveDonate: (b: boolean) => void;
}

function CardInformation(props: CardInformationProps) {
  return (
    <div className="relative mt-5 flex flex-col items-center border border-solid border-gray-200 rounded-2xl transition-all duration-500 md:flex-row max-w-xl ">
      <div className="block overflow-hidden md:w-screen h-80">
        <img
          src="https://pagedone.io/asset/uploads/1695365240.png"
          alt="Card image"
          className="h-full rounded-2xl object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
          Conoce a Zaid Omar!
        </h4>
        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
          Provides faster transaction, so money arrives in realtime Provides faster transaction, so money arrives in
          realtime Provides faster transaction, so money arrives in realtime
          <br />
          <strong>Edad:</strong> 1
          <br />
          <strong>Fecha de nacimiento:</strong> 31 de octubre de 2022
          <br />
          <strong>Genero:</strong> Masculino
        </p>
        <button
          className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold"
          onClick={() => props.setActiveDonate(true)}
        >
          Elige ser amigo de Zaid Omar
        </button>
      </div>
    </div>
  );
}

export default CardInformation;
