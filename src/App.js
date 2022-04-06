import "./App.scss";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import GetYourPizza from "./components/GetYourPizza/GetYourPizza";

function App() {
  return (
    <>
      <Router>
        <Hero />
        <GetYourPizza />
      </Router>
    </>
  );
}

export default App;
