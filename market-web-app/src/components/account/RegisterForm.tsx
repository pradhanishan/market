import { FC, MutableRefObject, useRef } from "react";
import { useAppDispatch } from "../../hooks/rtk-hooks";
import { openPopup } from "../../store/popup-slice";
import { useMutation, gql } from "@apollo/client";
import { rtkLogin } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "../ui/Button";
import classes from "./register-form.module.css";
import Spinner from "react-bootstrap/Spinner";

const REGISTER = gql`
  mutation ($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      accessToken
    }
  }
`;

interface IRegisterFormProps {
  handleLoginMode: any;
}

const RegisterForm: FC<IRegisterFormProps> = ({ handleLoginMode }: IRegisterFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [register, { loading, error, reset }] = useMutation(REGISTER);
  const usernameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const confirmPasswordRef = useRef() as MutableRefObject<HTMLInputElement>;

  async function handleSubmitForm() {
    try {
      const response = await register({
        variables: {
          registerInput: {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            confirmPassword: confirmPasswordRef.current.value,
          },
        },
      });
      localStorage.setItem("accessToken", response.data.register.accessToken);
      dispatch(rtkLogin());
      // TODO ----> Attempt to refresh token in case of login failure
      dispatch(openPopup({ title: "Success!", message: "Registered  successfully" }));
      navigate("/");
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        reset();
      }, 3000);
    }
  }
  // dispatch(openPopup());

  return (
    <div className={classes["register-form"]}>
      <Form>
        <h5>Register</h5>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={usernameRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" ref={emailRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={confirmPasswordRef} />
        </Form.Group>
        {error ? <span className="text-danger">{error.message}</span> : null}
        <Button onClick={handleSubmitForm}>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            "Register"
          )}
        </Button>
        <Button variant="secondary" onClick={handleLoginMode}>
          Login instead
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
