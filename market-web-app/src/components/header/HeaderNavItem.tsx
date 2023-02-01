import { FC } from "react";
import ListGroup from "react-bootstrap/listgroup";
import { NavLink } from "react-router-dom";
import classes from "./header-nav-item.module.css";
interface IHeaderNavItemProps {
  icon: any;
  name: string;
  to: string;
  onClick?: any;
}

const HeaderNavItem: FC<IHeaderNavItemProps> = ({ icon, name, to, onClick }: IHeaderNavItemProps) => {
  return (
    <NavLink
      to={to}
      onClick={onClick !== undefined || onClick !== null ? onClick : null}
      className={({ isActive }) =>
        isActive
          ? `${classes["header-nav-item"]} ${classes["header-nav-item-active"]}`
          : `${classes["header-nav-item"]} ${classes["header-nav-item-inactive"]}`
      }
    >
      <ListGroup.Item className={classes["header-nav-item-listgroup-item"]}>
        <span className={classes["header-nav-item-icon"]}>{icon}</span>
        <span className={classes["header-nav-item-text"]}>{name}</span>
      </ListGroup.Item>
    </NavLink>
  );
};

export default HeaderNavItem;
