import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/Navigation.component";
import SignIn from "./routes/sign-in/Sign-in.component";

function App() {
  const Shop = () => {
    return (
      <div>
        <h1>Shop for Shit</h1>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
