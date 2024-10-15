import imgHome from '../../assets/home.jpeg';

function About() {
  return (
    <>
      <div className="relative min-h-min items-center flex top-0">
        <img className="fixed left-0 top-0 right-0 w-screen h-3/4 z-0 object-cover" src={imgHome} alt="" />
        <div className="z-10 text-white text-center w-full h-96 content-center justify-center">
          <div className="">
            <h2 className="text-7xl font-bold h-auto">
              <span className="bg-black bg-opacity-60 p-4 inline-block">¿Qué hacemos?</span>
            </h2>
          </div>
          <span className="bg-black bg-opacity-60 mt-4 px-2 inline-block">
            <p className="text-2xl py-1">Descubre quienes somos y lo que hacemos.</p>
          </span>
        </div>
      </div>

      <div className="relative h-96 overflow-hidden bg-white">
        <div className="z-10 text-black text-center w-full content-center justify-center">
          <div className="py-4">
            <h2 className="text-5xl mt-5 font-bold h-auto">Nuestra Misión y Visión</h2>
          </div>
          <div className="flex gap-8 m-10">
            <div className="flex flex-col bg-slate-500 bg-opacity-20 px-4 py-4">
              <h5 className="font-bold text-4xl">Visión</h5>
              <p className="text-2xl py-3">
                "Al 2027 seremos una fundación sostenible con jóvenes formados y comprometidos que impacten la
                comunidad."
              </p>
            </div>
            <div className="flex flex-col bg-slate-500 bg-opacity-20 px-4 py-4">
              <h5 className="font-bold text-2xl">Misión</h5>
              <p className="text-2xl py-3">
                "Somos una Fundación Cristiana llamada para impulsar el desarrollo integral en niños y jóvenes."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
