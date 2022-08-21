import { FC } from "react";

import "./Footer.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <main className="footer">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.youtube.com/watch?v=1flEYHtgVmg"
    >
      la réf ❤️
    </a>
    — (<a href="/legal.txt">mentions légales</a> )
  </main>
);

export default Footer;
