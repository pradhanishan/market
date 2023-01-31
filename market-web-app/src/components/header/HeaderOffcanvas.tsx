import classes from "./header-offcanvas.module.css";
import { MdApps, MdHome, MdShoppingCart, MdSettings } from "react-icons/md";
import { FaUser, FaMoon } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FC, useState } from "react";
import ListGroup from "react-bootstrap/listgroup";
import HeaderNavItem from "./HeaderNavItem";

export const HeaderOffcanvas: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={classes["header-offcanvas"]}>
      <MdApps onClick={handleShow} size={32} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Market</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <HeaderNavItem icon={<MdHome />} name="Home" />
            <HeaderNavItem icon={<MdShoppingCart />} name="Cart" />
            <HeaderNavItem icon={<FaUser />} name="Account" />
            <HeaderNavItem icon={<FaMoon />} name="Dark Mode" />
            <HeaderNavItem icon={<MdSettings />} name="Settings" />
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default HeaderOffcanvas;
