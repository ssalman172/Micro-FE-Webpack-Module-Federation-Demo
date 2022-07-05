import { Routes, Route } from "react-router-dom";
import ProductCatalog from "./views/ProductCatalog";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProductCatalog />} />
    </Routes>
  )
}

export default Main;