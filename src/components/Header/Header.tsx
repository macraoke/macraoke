import { FC } from "react";

import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <main className="header">
    <h1 className={styles.main}>Macraoke</h1>
    <h1>Macraoke</h1>
  </main>
);

export default Header;
