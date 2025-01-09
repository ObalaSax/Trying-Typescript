import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
//import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop/Shop";
import CartPage from "./Pages/CartPage/CartPage";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="allapp">
          <Navbar />
          <div className="allap-pages">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<CartPage />} />

              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </div>
          {/*<Footer />*/}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
