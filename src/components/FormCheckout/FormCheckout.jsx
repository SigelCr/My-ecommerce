/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import Wallet from "@mercadopago/sdk-react/bricks/wallet";
import estilos from "./FormCheckout.module.css";

const FormCheckout = ({ handleBuy, preferenceId }) => {
  const cancelRefreshForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className={estilos.contenedor}>
      <h1 className={estilos.titulo}>
        Rellene con sus datos para completar la compra:
      </h1>
      <form onSubmit={cancelRefreshForm} className={estilos.contenedorInput}>
        <p>Nombre:</p>
        <TextField type="text" placeholder="Nombre" className={estilos.input} />
        <p>Email:</p>
        <TextField type="text" placeholder="Email" className={estilos.input} />
        <p>Telefono:</p>
        <TextField
          type="number"
          placeholder="Telefono"
          className={estilos.input}
        />
        <p>Contraseña:</p>
        <TextField placeholder="Contraseña" className={estilos.input} />
        <p>Confirmar contraseña:</p>
        <TextField
          placeholder="Confirmar contraseña"
          className={estilos.input}
        />
        <button onClick={handleBuy} className={estilos.boton} type="submit">
          Comprar
        </button>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </form>
    </div>
  );
};

export default FormCheckout;
