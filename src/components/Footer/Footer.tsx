import { FC } from "react";

import "./Footer.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <main className="footer">
    <p className="mr-4">
      Inspiré par{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/watch?v=1flEYHtgVmg"
      >
        David Castello-Lopes ❤️
      </a>
    </p>
    <p>
      Publication:{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/ValentinViennot"
      >
        @ValentinViennot
      </a>{" "}&amp;{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/roger_miret"
      >
        @roger_miret
      </a>{" "}
      — (<a href="legal.txt">Mentions&nbsp;légales</a>) —{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/macraoke/macraoke"
      >
        Code source
      </a>
    </p>
  </main>
);

export default Footer;
