import { FC } from "react";
import ToggleAuthForm from "../components/account/ToggleAuthForm";
import classes from "./account-page.module.css";

const AccountPage: FC = () => {
  return (
    <div className={classes["account-page"]}>
      <ToggleAuthForm />
    </div>
  );
};

export default AccountPage;
