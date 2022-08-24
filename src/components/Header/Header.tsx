import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRandomVideo } from "../../interfaces/Video";

import "./Header.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const params = useParams();
  const navigate = useNavigate();

  const top = () => {
    navigate("/top");
  };

  const random = () => {
    navigate(`/${getRandomVideo(params.video)}`);
  };

  const beer = () => {
    window.open("http://buymeacoffee.com/Macraoke", "_blank");
  };

  return (
    <main className="header grid grid-cols-1 mb-5">
      <h1 className="text-3xl font-bold mb-4">Macraoke</h1>
      <div className="flex flex-row">
        <button onClick={() => random()} className="mr-3">
          Random
        </button>
        <button onClick={top} className="mr-3">
          Top 10
        </button>
        <button onClick={beer} className="mr-3">
          🍺 Nous offrir une bière
        </button>
      </div>
    </main>
  );
};

export default Header;
