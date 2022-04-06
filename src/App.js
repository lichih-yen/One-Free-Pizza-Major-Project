import "./App.scss";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Hero />
      </Router>
    </>
  );
}

export default App;
