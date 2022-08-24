import { Routes, Route } from "react-router-dom";

import "./App.css";
import Forwarder from "./pages/Forwarder/Forwarder";
import Player from "./pages/Player/Player";
import TopVideos from "./pages/TopVideos/TopVideos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Forwarder />} />
        <Route path="/top" element={<TopVideos />} />
        <Route path="/:video/" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
