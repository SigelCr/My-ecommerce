import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductListContainer from "./components/ProductList/ProductListContainer";
import { ProductDetailContainer } from "./components/ProductDetail/ProductDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ProductListContainer />}
          />
          <Route
            path="/productsDetail/:id"
            element={<ProductDetailContainer />}
          />
          <Route path="/contact" element={<h1>contacto</h1>} />

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
