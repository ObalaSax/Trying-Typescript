//My Styles
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages Imports
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import CartPage from "./Pages/Cart/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route index path="/" element={<Home />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
