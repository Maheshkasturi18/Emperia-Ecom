import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contactus from "./components/ContactUs/Contactus";
import Inovation from "./components/Inovation/Inovation";
import History from "./components/AboutUs/History/History";
import Leadership from "./components/AboutUs/Leadership/Leadership";
import Distribution from "./components/AboutUs/Distribution/Distribution";
import Corevalue from "./components/AboutUs/Corevalue/Corevalue";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Products/Product";
import Cart from "./components/Cart";
import PersonalCare from "./components/Products/PersonalCare";
import GenCare from "./components/Products/GenCare";
import SurfaceCare from "./components/Products/SurfaceCare";
import KitchenCare from "./components/Products/KitchenCare";
import BathCare from "./components/Products/BathCare";
import Checkout from "./components/Checkout";
import InnerDetails from "./components/InnerDetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="history/" element={<History />}></Route>
          <Route path="leadership/" element={<Leadership />}></Route>
          <Route path="inovation/" element={<Inovation />}></Route>
          <Route path="distribution/" element={<Distribution />}></Route>
          <Route path="corevalue/" element={<Corevalue />}></Route>
          <Route path="contactus/" element={<Contactus />}></Route>
          <Route path="products/" element={<Product />}></Route>
          <Route path="/innerdetails/:id" element={<InnerDetails/>}></Route>
          <Route path="personalcare/" element={<PersonalCare />}></Route>
          <Route path="generalcare/" element={<GenCare />}></Route>
          <Route path="floorcare/" element={<SurfaceCare />}></Route>
          <Route path="kitchencare/" element={<KitchenCare/>}></Route>
          <Route path="bathroomcare/" element={<BathCare />}></Route>
          <Route path="cart/" element={<Cart />}></Route>
          <Route path="checkout/" element={<Checkout />}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
