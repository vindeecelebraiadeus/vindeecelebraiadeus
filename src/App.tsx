import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Oracao from "./components/oracao/Oracao";
import Playlist from "./components/playlist/Playlist";
import Programacao from "./components/programacao/Programacao";
import Sobre from "./components/sobre/Sobre";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home/>
      <Programacao />
      <Sobre />
      <Playlist />
      <Oracao />
      <Footer/>
    </div>
  );
};

export default App;
