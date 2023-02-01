import classes from "./header-offcanvas.module.css";
import { MdApps, MdHome, MdShoppingCart, MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
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
        <Offcanvas.Header closeButton className={classes["offcanvas-header"]}>
          <Offcanvas.Title>Market</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <HeaderNavItem onClick={handleClose} icon={<MdHome />} name="Home" to="/" />
            <HeaderNavItem onClick={handleClose} icon={<MdShoppingCart />} name="Cart" to="/cart" />
            <HeaderNavItem onClick={handleClose} icon={<FaUser />} name="Account" to="/account" />
            <HeaderNavItem onClick={handleClose} icon={<MdSettings />} name="Settings" to="/settings" />
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default HeaderOffcanvas;
