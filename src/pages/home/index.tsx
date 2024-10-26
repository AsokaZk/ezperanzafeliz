import { Link } from 'react-router-dom';
import image from '../../assets/imagen principal.jpg';

function Home() {
  return (
    <div className="relative min-h-screen items-center flex w-screen">
      <img className="absolute top-0 w-full min-h-screen z-0 object-cover h-screen" src={image} alt="" />
      <div className="absolute bg-black z-10 h-screen w-screen opacity-25"></div>
      <div className="flex flex-col gap-4 text-white z-10 px-8 mt-14 w-1/2">
        <h3 className="text-7xl font-bold">Toma acción</h3>
        <p className="text-4xl">Trasforma el futuro y el presente de una familia</p>
        <div>
          <Link className="rounded bg-white text-black inline-block px-4 py-2 hover:bg-slate-400" to={'/choose'}>
            Donar
          </Link>{' '}
        </div>
      </div>
    </div>
  );
}

export default Home;
