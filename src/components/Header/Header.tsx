import { FC, useContext } from "react";
import Context from "../../context/Context";

import "./Header.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [_state, dispatch] = useContext(Context);

  const top10 = () => {
    console.log("top10");
  };

  const random = () => {
    dispatch({ type: "GET_RANDOM_VIDEO_OTHER_THAN_CURRENT" });
  };

  const beer = () => {
    window.open("http://buymeacoffee.com/Macraoke", "_blank");
  };

  return (
    <main className="header grid grid-cols-1 mb-5">
      <h1 className="text-3xl font-bold mb-4">Macraoke</h1>
      <h2 className="text-xl mb-4">
        Le karaoke avec les discours d'Emmanuel Macron
      </h2>
      <div className="flex flex-row">
        <button onClick={random} className="mr-3">
          Random
        </button>
        <button onClick={top10} className="mr-3">
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
