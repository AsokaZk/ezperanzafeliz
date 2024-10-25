import { useParams } from 'react-router-dom';
import FormData from '../../components/Form';

function Payment() {
  let { id } = useParams();

  const data = [
    { option: 'A', monto: '80', montoAnual: '960' },
    { option: 'B', monto: '90', montoAnual: '960' },
    { option: 'C', monto: '100', montoAnual: '1860' },
  ];
  return (
    <div className="mt-24 text-center">
      {id != undefined && (
        <>
          <h4>
            Registro de donacion <br />
            Opcion {data[parseInt(id)].option}: 1 año
          </h4>
          <p>
            monto a donar por 12 meses: {data[parseInt(id)].monto} Bs <br />
            monto a donar por un año :{data[parseInt(id)].montoAnual} Bs
          </p>
          <img
            className="object-cover"
            src="https://lh3.google.com/u/0/d/10_kVOVgwkoS1ck46aA9MKw5HFJQKJXvQ=w2560-h1305-iv1"
            alt=""
          />
          <p>Scanee el codigo Qr</p>
          <p>N° de Cuenta: ..........................................</p>
          <div className="my-3">
            <FormData />
          </div>
        </>
      )}
    </div>
  );
}

export default Payment;
