import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import VideoPlayer from './components/VideoPlayer/VideoPlayer.lazy';

function App() {
  return (
    <>
      <Header />
      <div className="player">
        <VideoPlayer />
      </div>
      <Footer />
    </>
  );
}

export default App;
