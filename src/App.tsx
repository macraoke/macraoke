import "./App.css";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Footer from "./components/Footer/Footer";
import { Provider } from "./context/Context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="player">
          <VideoPlayer />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
