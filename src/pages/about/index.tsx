import imgHome from '../../assets/home.jpeg';
import child from '../../assets/1. NIÑOS (GRUPAL).jpg';
import parents from '../../assets/2.PADRES DE FAMILIA (GRUPAL).jpg';

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

      <div className="relative overflow-hidden w-full h-full bg-white">
        <div className="z-10 text-black text-center w-full content-center justify-center">
          <div className="py-4">
            <h2 className="text-5xl mt-5 font-bold h-auto">Nuestra Misión y Visión</h2>
          </div>
          <div className="flex gap-8 m-10">
            <div className="flex flex-col bg-slate-500 bg-opacity-20 px-4 py-4">
              <h5 className="font-bold text-4xl">Visión</h5>
              <p className="text-2xl py-3">
                "SER UNA IGLESIA DE 2000 MIEMBROS, ESTRUCTURADA CON LIDERAZGO CALIFICADO Y FUNDAMENTO CRISTOCÉNTRICO
                DESARROLLANDO SERVICIO SOCIAL A LA POBLACION."
              </p>
            </div>
            <div className="flex flex-col bg-slate-500 bg-opacity-20 px-4 py-4">
              <h5 className="font-bold text-2xl">Misión</h5>
              <p className="text-2xl py-3">
                "LA IGLESIA EVANGÉLICA PENTECOSTAL NACIONAL DE QUILLACOLLO ESTA PARA SERVIR, EVANGELIZAR NIÑOS, NIÑAS,
                ADOLESCENTES Y ADULTOS. DISCIPULANDO AL LIDERAZGO Y MIEMBRO GENERAL, INCULCANDO VALORES Y PRINCIPIOS
                PARA TENER UNA RELACION PERSONAL CON CRISTO."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white z-30 flex flex-col justify-between p-20 gap-4">
        <div className="flex justify-around">
          <div className="text-center">
            <h6 className="text-lg">
              <strong>Niños</strong>
            </h6>
            <img src={child} className="w-96" alt="" />
            <p className="w-96">
              Los niños de la Fundación Esperanza Feliz inauguran una celebración, llenando el ambiente de entusiasmo y
              alegría, mientras sostienen globos de colores en una escena festiva y conmovedora
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-lg">
              <strong>Padres de familia</strong>
            </h6>
            <img src={parents} className="w-96" alt="" />
            <p className="w-96">
              Los padres de familia de los niños de la Fundación Esperanza Feliz concluyen su labor de servicio,
              demostrando su compromiso y dedicación hacia el bienestar de sus hijos y de la comunidad.
            </p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="video-responsive w-96 h-96">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1212341040069503&ref=external&mibextid=LoFJqn`}
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Video"
            />
          </div>
          <div className="video-responsive w-96 h-96">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100081782161578/videos/1896821180816572`}
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Video"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
