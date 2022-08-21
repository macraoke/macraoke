import { FC } from "react";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <main className={styles.main}>
    <a href="/legal.txt">mentions légales</a> —{" "}
    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=1flEYHtgVmg">
      la réf
    </a>
  </main>
);

export default Footer;
