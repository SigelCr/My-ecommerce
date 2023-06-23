import FormCheckout from "./FormCheckout";
import axios from "axios";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  let items;

  const checkoutFn = (data) => {
    items = cart.map((product) => {
      return {
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      };
    });

    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder)
      .then((res) => res.id)
      .catch((error) => console.log(error));

    //clase firebase2 min 35

    cart.map((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
    //clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: checkoutFn,

    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener como minimo 3 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener como minimo 1 mayúsculas, 1 minúsculas, 1 numero, 6 caracteres como mínimo y 15 como máximo",
        }),
      confirmPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: true,
  });
  // completo /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/

  //mercadopago>
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-1d6e7854-2694-4a5d-999e-7a5c878b321f");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          items: items,
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(
        "no se envian los datos al back o no se encuentra el back",
        error
      );
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
      <FormCheckout
        values={values}
        errors={errors}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleBuy={handleBuy}
        preferenceId={preferenceId}
      />
    </div>
  );
};

export default FormCheckoutContainer;
