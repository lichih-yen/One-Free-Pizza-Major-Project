import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import background from "./images/background.jpg";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <MainMenu />
    </div>
  );
}

export default App;
