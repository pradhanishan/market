import classes from "./header-offcanvas.module.css";
import { MdApps, MdHome, MdShoppingCart, MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FC, useState } from "react";
import ListGroup from "react-bootstrap/listgroup";
import HeaderNavItem from "./HeaderNavItem";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/rtk-hooks";
import { rtkLogout } from "../../store/auth-slice";
import { openPopup } from "../../store/popup-slice";

export const HeaderOffcanvas: FC = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
  };

  const handleLogin = () => {
    handleClose();
    navigate("/account");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(rtkLogout());
    dispatch(openPopup({ title: "Success", message: "Logged out successfully" }));
    handleClose();
    navigate("/account");
  };

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
            {auth.isLoggedIn === true ? (
              <HeaderNavItem onClick={handleClose} icon={<FaUser />} name="Account" to="/account" />
            ) : null}
            <HeaderNavItem onClick={handleClose} icon={<MdSettings />} name="Settings" to="/settings" />
            {auth.isLoggedIn === true ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Button onClick={handleLogin}>login</Button>
            )}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default HeaderOffcanvas;
