import { FC } from "react";

import "./Header.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const a = () => {
    console.log("here");
  }

  return (
    <main className="header grid grid-cols-1 mb-5">
      <h1 className="text-3xl font-bold mb-4">Macraoke</h1>
      <h2 className="text-xl mb-4">Le karaoke avec les discours d'Emmanuel Macron</h2>
      <div className="flex flex-row">
        <button onClick={a} className="mr-3">Random</button>
        <button onClick={a} className="mr-3">Top 10</button>
        <button onClick={a} className="mr-3">?</button>
      </div>
    </main>
  );
};

export default Header;
