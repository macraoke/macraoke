import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SubtitlePlayer from './components/SubtitlePlayer/SubtitlePlayer.lazy';

function App() {
  return (
    <>
      <Header />
      <div className="player">
        <SubtitlePlayer />
      </div>
      <Footer />
    </>
  );
}

export default App;
