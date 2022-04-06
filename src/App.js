import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
// import Getyourpizza from "./components/Getyourpizza/Getyourpizza";
// import Home from "./components/Home/Home";
// import Orders from "./components/Orders/Oders";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import GetPizzaPage from "./pages/GetPizzaPage/GetPizzaPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="app-container">
      <Header />
      <MainMenu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getyourpizza" element={<GetPizzaPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <Home />
      <Getyourpizza /> */}
      {/* <Orders /> */}
      {/* <MainMenu /> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getyourpizza" element={<Getyourpizza />} />
        <Route path="/orders" element={<Orders />} />
      </Routes> */}
    </div>
  );
}

export default App;
