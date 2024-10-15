function Donate() {
  return (
    <>
      <div className="relative min-h-screen items-center flex w-screen">
        <img
          className="absolute top-0 w-full min-h-96 z-0 object-cover"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A8545Z5z8quaW75k/d2462ff5-c424-4a9f-8fc9-91728e6f3560-dOq4qDJKWQiZ3gbw.jpg"
          alt=""
        />
        <div className="absolute bg-black z-10 min-h-96 w-screen opacity-25"></div>
        <div className="flex flex-col gap-4 text-white z-10 px-8 mt-14 w-1/2">
          <h3 className="text-7xl font-bold">Toma acción</h3>
          <p className="text-4xl">Trasforma el futuro y el presente de una familia</p>
          <div></div>
        </div>
      </div>
      <div className="relative mb-60 h-full">
        <div className="z-10 text-black text-center w-full content-center justify-center">
          <div className="py-4">
            <h2 className="text-5xl font-bold h-auto">Nuestra Misión y Visión</h2>
            <p className="text-2xl py-3">
              Al 2027 seremos una fundación sostenible con jóvenes formados y comprometidos que impacten la comunidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
