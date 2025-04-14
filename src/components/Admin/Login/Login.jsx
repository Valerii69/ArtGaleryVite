import { useState } from "react";
import { auth } from "../../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import "./login.css";

export function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

  const showLoading = () =>
    Swal.fire({
      timer: 1000,
      showConfirmButton: false,
      willOpen: () => Swal.showLoading(),
    });

  const showError = (title = "Помилка", text = "Щось пішло не так") =>
    Swal.fire({ icon: "error", title, text });

  const showSuccess = () =>
    Swal.fire({
      icon: "success",
      title: "Вхід успішний (Адмін)",
      showConfirmButton: false,
      timer: 3000,
    });

  const handleLogin = async (e) => {
    e.preventDefault();
    showLoading();

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (user.email !== adminEmail) {
        showError("Доступ заборонено", "Цей обліковий запис не є адміністратором.");
        await auth.signOut();
        return;
      }

      localStorage.setItem("is_authenticated", true);
      setIsAuthenticated(true);
      showSuccess();
    } catch (error) {
      showError("Помилка входу", error.message);
    }
  };

  return (
    <div className="small-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="login-title">Hello Admin</h1>

        <label htmlFor="email" className="login-label">Email</label>
        <input
          id="email"
          type="email"
          className="login-input"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="login-label">Password</label>
        <input
          id="password"
          type="password"
          className="login-input"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="submit"
          value="Login"
          className="login-submit"
        />
      </form>
    </div>
  );
}
