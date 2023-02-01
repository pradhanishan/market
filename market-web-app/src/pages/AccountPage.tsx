import { FC, useState } from "react";
import LoginForm from "../components/account/LoginForm";
import RegisterForm from "../components/account/RegisterForm";

const AccountPage: FC = () => {
  const [registerMode, setRegisterMode] = useState<boolean>(false);

  function handleRegisterMode() {
    setRegisterMode(true);
  }

  function handleLoginMode() {
    setRegisterMode(false);
  }

  return (
    <div>
      {registerMode === true ? (
        <RegisterForm handleLoginMode={handleLoginMode} />
      ) : (
        <LoginForm handleRegisterMode={handleRegisterMode} />
      )}
    </div>
  );
};

export default AccountPage;
