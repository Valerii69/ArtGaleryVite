import { auth } from "../../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import './dashboard.css'

export function Dashboard({ setIsAuthenticated }) {
  const handleLogout = async () => {
    try {
      await signOut(auth); // вийти з Firebase
      localStorage.removeItem("is_authenticated"); // видалити auth-флаг
      setIsAuthenticated(false); // оновити стан
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button className="logoutBtn" onClick={handleLogout}>Logout</button>
    </div>
  );
}
