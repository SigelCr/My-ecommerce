/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import Wallet from "@mercadopago/sdk-react/bricks/wallet";
import styled from "./FormCheckout.module.css";

const FormCheckout = ({
  handleBuy,
  preferenceId,
  handleChange,
  handleSubmit,
  errors,
  values,
}) => {
  return (
    <div className={styled.container}>
      <h1 className={styled.title}>
        Rellene con sus datos para completar la compra:
      </h1>
      {values.nombre.length > 0 && (
        <p className={styled.p}>
          Le aparecera el boton de comprar una vez que complete todos los campos
          correctamente
        </p>
      )}
      <form onSubmit={handleSubmit} className={styled.containerInput}>
        <TextField
          type="text"
          label="Nombre"
          className={styled.input}
          onChange={handleChange}
          name="nombre"
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          type="text"
          label="Email"
          className={styled.input}
          onChange={handleChange}
          name="email"
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          className={styled.input}
          onChange={handleChange}
          name="password"
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Confirmar contraseña"
          className={styled.input}
          onChange={handleChange}
          name="confirmPassword"
          error={errors.confirmPassword ? true : false}
          helperText={errors.confirmPassword}
        />

        {!errors.nombre &&
          !errors.email &&
          !errors.password &&
          !errors.confirmPassword &&
          values.confirmPassword.length >= 6 && (
            <button onClick={handleBuy} className={styled.btn} type="submit">
              Iniciar compra
            </button>
          )}
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </form>
    </div>
  );
};

export default FormCheckout;
