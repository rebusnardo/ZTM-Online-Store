import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "../src/routes/shop/Shop.component";
import Checkout from "./components/checkout/checkout.component";
// import SignIn from "./routes/sign-in/Sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
