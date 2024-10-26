import CardDonate from '../../components/CardDonate';

import data from '../../db/donate.json';

function Donate() {
  const cards = data.map((item) => {
    return <CardDonate item={item} key={item.id} />;
  });
  return (
    <>
      <div className="relative min-h-min items-center flex top-0">
        <img
          className="fixed left-0 top-0 right-0 w-screen h-1/2 z-0 object-cover"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A8545Z5z8quaW75k/d2462ff5-c424-4a9f-8fc9-91728e6f3560-dOq4qDJKWQiZ3gbw.jpg"
          alt=""
        />
        <div className="absolute bg-black z-10 w-screen opacity-25"></div>
        <div className="flex flex-col gap-4 text-white z-10 px-8 mt-20 w-1/2">
          <h3 className="text-7xl font-bold">Toma acción</h3>
          <p className="text-4xl">Trasforma el futuro y el presente de una familia</p>
          <div></div>
        </div>
      </div>
      <div className="relative h-full overflow-hidden bg-white">
        <div className="z-10 text-black text-center w-full content-center justify-center">
          <div className="py-4">
            <h2 className="text-3xl font-bold h-auto text-slate-700">¿Como puedes donar a los niños necesitados?</h2>
            <p className="text-1xl p-3 text-slate-500">
              Los niños que viven en la pobreza se enfrentan a muchos desafíos, duras condiciones de vida. Puede brindar
              apoyo inmediato para cualquiera de las necesidades a continuación. Sus donaciones son las respuestas a
              nuestras oraciones. Dios lo bendiga.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-around px-3">{cards}</div>
      </div>
    </>
  );
}

export default Donate;
