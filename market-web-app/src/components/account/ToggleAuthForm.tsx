import { FC, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const ToggleAuthForm: FC = () => {
  const [registerMode, setRegisterMode] = useState<boolean>(false);

  function handleRegisterMode() {
    setRegisterMode(true);
  }

  function handleLoginMode() {
    setRegisterMode(false);
  }
  return registerMode === true ? (
    <RegisterForm handleLoginMode={handleLoginMode} />
  ) : (
    <LoginForm handleRegisterMode={handleRegisterMode} />
  );
};

export default ToggleAuthForm;
