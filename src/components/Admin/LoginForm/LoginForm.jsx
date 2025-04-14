import { useState, useEffect } from "react";
import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";
import "./loginForm.css"

export function LoginForm() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authValue = JSON.parse(localStorage.getItem("is_authenticated"));
    setIsAuthenticated(authValue);
  }, []);

  return (
    <div className="login-form-wrapper">
      <div className="login-form-container">
        {isAuthenticated ? (
          <Dashboard  setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </div>
    </div>
  );
}