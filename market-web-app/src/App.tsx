import { Route, Routes } from "react-router-dom";
import classes from "./app.module.css";
import Header from "./components/header/Header";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
