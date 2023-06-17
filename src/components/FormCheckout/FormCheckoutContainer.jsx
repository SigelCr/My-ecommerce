import FormCheckout from "./FormCheckout";
import axios from "axios";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useState } from "react";

const FormCheckoutContainer = () => {
  //mercadopago>
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-1d6e7854-2694-4a5d-999e-7a5c878b321f");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          description: "nombre del prod",
          price: 100,
          quantity: 1,
          currency_id: "ARS",
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
  //<mercadopago
  return (
    <div>
      <FormCheckout handleBuy={handleBuy} preferenceId={preferenceId} />
    </div>
  );
};

export default FormCheckoutContainer;
