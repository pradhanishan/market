import { FC } from "react";
import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../../hooks/rtk-hooks";
import { openPopup } from "../../store/popup-slice";
import Button from "../ui/Button";
import classes from "./login-form.module.css";

interface ILoginFormProps {
  handleRegisterMode: any;
}

const LoginForm: FC<ILoginFormProps> = ({ handleRegisterMode }: ILoginFormProps) => {
  const dispatch = useAppDispatch();
  function handleSubmitForm() {
    dispatch(openPopup());
  }

  return (
    <div className={classes["login-form"]}>
      <Form>
        <h5>Login</h5>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button onClick={handleSubmitForm}>Login</Button>
        <Button variant="secondary" onClick={handleRegisterMode}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;