import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductListContainer from "./components/ProductList/ProductListContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListContainer />} />
          <Route path="/contact" element={<h1>contacto</h1>} />

          <Route path="/clothes" element={<h1>aca ropa</h1>} />
          <Route path="/footwear" element={<h1>aca calzado</h1>} />
          <Route path="/bijouteries" element={<h1>aca bijouteries</h1>} />

          <Route path="/cart" element={<h1>aca el cashito</h1>} />
          <Route path="/login" element={<h1>aca login</h1>} />
          <Route path="/sign-up" element={<h1>aca registrarse</h1>} />

          <Route path="*" element={<h1>ruta inexistente</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
