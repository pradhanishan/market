import { FC } from "react";
import ListGroup from "react-bootstrap/listgroup";
import { NavLink } from "react-router-dom";
interface IHeaderNavItemProps {
  icon: any;
  name: string;
  to: string;
  onClick: any;
}

const HeaderNavItem: FC<IHeaderNavItemProps> = ({ icon, name, to, onClick }: IHeaderNavItemProps) => {
  return (
    <NavLink to={to} onClick={onClick}>
      <ListGroup.Item>
        {icon}
        {name}
      </ListGroup.Item>
    </NavLink>
  );
};

export default HeaderNavItem;
