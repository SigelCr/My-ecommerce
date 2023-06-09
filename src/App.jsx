import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

/* import CartContextProvider from "./context/CartContext"; */

function App() {
  return (
    <BrowserRouter>
      {/*  <CartContextProvider> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<h1>Todos los productos</h1>} />
          <Route path="/clothes" element={<h1>ropa</h1>} />
          <Route path="/footwear" element={<h1>calzado</h1>} />
          <Route path="/bijouterie" element={<h1>bijouterie</h1>} />

          <Route path="/cart" element={<h1>cashito</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="/sign-up" element={<h1>registrarse</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />

          <Route path="*" element={<h1>ruta inexistente</h1>} />
        </Route>
      </Routes>
      {/*  </CartContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
