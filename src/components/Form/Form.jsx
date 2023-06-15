import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
  });
  const envioDeForm = (e) => {
    e.preventDefault();
    console.log(userData);
    /*//login
    let dataLogin = {
      nombre: nombre,
      apellido: apellido
    }
    axios.post("url", dataLogin)
    */
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>aca el formulario</h1>
      <form onSubmit={envioDeForm}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
        <button type="submit">enviar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  );
};

export default Form;
