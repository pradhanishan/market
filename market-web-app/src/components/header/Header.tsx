import { FC } from "react";
import HeaderOffcanvas from "./HeaderOffcanvas";
import classes from "./header.module.css";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <HeaderOffcanvas />
      <h5>Market</h5>
    </header>
  );
};

export default Header;
