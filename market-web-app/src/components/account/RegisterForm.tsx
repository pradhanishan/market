import { FC } from "react";
import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../../hooks/rtk-hooks";
import { openPopup } from "../../store/popup-slice";
import Button from "../ui/Button";
import classes from "./register-form.module.css";

interface IRegisterFormProps {
  handleLoginMode: any;
}

const RegisterForm: FC<IRegisterFormProps> = ({ handleLoginMode }: IRegisterFormProps) => {
  const dispatch = useAppDispatch();
  function handleSubmitForm() {
    // dispatch(openPopup());
  }

  return (
    <div className={classes["register-form"]}>
      <Form>
        <h5>Register</h5>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button onClick={handleSubmitForm}>Register</Button>
        <Button variant="secondary" onClick={handleLoginMode}>
          Login instead
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
