import { FC } from "react";
import ListGroup from "react-bootstrap/listgroup";
import { MdSettings } from "react-icons/md";

interface IHeaderNavItemProps {
  icon: any;
  name: string;
}

const HeaderNavItem: FC<IHeaderNavItemProps> = ({ icon, name }: IHeaderNavItemProps) => {
  return (
    <ListGroup.Item>
      {icon}
      {name}
    </ListGroup.Item>
  );
};

export default HeaderNavItem;
