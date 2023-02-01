import { FC } from "react";
import HeaderOffcanvas from "./HeaderOffcanvas";
import classes from "./header.module.css";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <HeaderOffcanvas />
    </header>
  );
};

export default Header;
