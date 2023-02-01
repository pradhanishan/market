import { FC, useRef, MutableRefObject } from "react";
import { useAppDispatch } from "../../hooks/rtk-hooks";
import { openPopup } from "../../store/popup-slice";
import { rtkLogin } from "../../store/auth-slice";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "../ui/Button";
import Spinner from "react-bootstrap/Spinner";
import classes from "./login-form.module.css";
interface ILoginFormProps {
  handleRegisterMode: any;
}

const LOGIN = gql`
  mutation ($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
    }
  }
`;

const LoginForm: FC<ILoginFormProps> = ({ handleRegisterMode }: ILoginFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { loading, error, reset }] = useMutation(LOGIN);

  const usernameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  async function handleSubmitForm() {
    //  TODO ----> Validate UI Errors
    try {
      const response = await login({
        variables: {
          loginInput: {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
          },
        },
      });
      localStorage.setItem("accessToken", response.data.login.accessToken);
      dispatch(rtkLogin());
      // TODO ----> Attempt to refresh token in case of login failure
      dispatch(openPopup({ title: "Success!", message: "Logged in successfully" }));
      navigate("/");
    } catch {
      setTimeout(() => {
        reset();
      }, 3000);
    }
  }

  return (
    <div className={classes["login-form"]}>
      <Form>
        <h5>Login</h5>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={usernameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>
        {error ? <span className="text-danger">{error.message}</span> : null}
        <Button onClick={handleSubmitForm}>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            "login"
          )}
        </Button>
        <Button variant="secondary" onClick={handleRegisterMode}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
