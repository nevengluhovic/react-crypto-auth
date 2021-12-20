import { useState, useEffect } from "react";
import { axios } from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./components/firebase-config";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
// import Nav from "./components/Nav";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoginEmail("");
      setLoginPassword("");
      console.log(Boolean(user));
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="register">
                <h1> Register User </h1>
                <input
                  placeholder="Email..."
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
                <input
                  placeholder="Password..."
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />

                <button onClick={register}> Create User</button>
              </div>

              <div className="login">
                <h1> Login </h1>
                <input
                  placeholder="Email..."
                  value={loginEmail}
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
                <input
                  placeholder="Password..."
                  value={loginPassword}
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />

                <button onClick={login}> Login</button>
              </div>
              <div className="userLogged">
                <h1> User Logged In: </h1>
                {user?.email}

                {user && (
                  <Link to="/dashboard">
                    <h1>DASHBOARD</h1>
                  </Link>
                )}
              </div>
              {user && <button onClick={logout}> Sign Out </button>}
            </div>
          }
        />
        <Route element={<ProtectedRoute user={user} />}>
          <Route logout={logout} path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/nav" element={<Nav />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
