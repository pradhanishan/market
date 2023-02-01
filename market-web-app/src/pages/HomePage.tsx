import { FC } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classes from "./home-page.module.css";
const HomePage: FC = () => {
  return (
    <div className={classes["home-page"]}>
      <InputGroup className="mb-3">
        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder="search for product" />
        <InputGroup.Text>Search</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default HomePage;
