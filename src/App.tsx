import "./App.css";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="player">
        <VideoPlayer videoId="f-s_Vv82yFw" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
