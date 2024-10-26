import { useParams } from 'react-router-dom';
import FormData from '../../components/Form';

import dataDonate from '../../db/donate.json';
import imageQR from '../../assets/qr.png';

function Payment() {
  let { id, idDonate } = useParams();

  const item = dataDonate.find((item) => item.id.toString() == idDonate);

  console.log(idDonate, id);
  const data = [
    { option: 'A', monto: '80', montoAnual: '960' },
    { option: 'B', monto: '80', montoAnual: '1920' },
    { option: 'C', monto: '80', montoAnual: '1860' },
  ];
  return (
    <div className="mt-24 flex flex-col text-center justify-center items-center">
      {id != undefined && (
        <>
          <h4>
            <strong>Registro de donacion</strong>
            <br />
            Opcion {data[parseInt(id)].option}: 1 año
          </h4>
          <p>
            monto a donar por mes: {data[parseInt(id)].monto} Bs <br />
            {id != '2' && <> monto a donar por un año :{data[parseInt(id)].montoAnual} Bs </>}
          </p>
        </>
      )}
      {idDonate != undefined && (
        <>
          <h4 className="text-2xl">
            <strong>REGISTRO DE DONACION {item?.name}</strong>
          </h4>
          <h5>APORTE EL MONTO QUE DESEE "DIOS LE BENDIGA"</h5>
        </>
      )}
      <img className="object-cover w-96" src={imageQR} alt="" />

      <p>Scanee el codigo Qr</p>
      <p>N° de Cuenta: 3000191956</p>
      <div className="my-3">
        <FormData />
      </div>
    </div>
  );
}

export default Payment;
