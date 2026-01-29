
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    await login(email, password);
    navigate("/dashboard");
  } catch (err) {
    alert("Login failed");
  }
};

return (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
    <div className="card" style={{ width: "360px" }}>
      <h2>Login</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>

      <p className="link" onClick={() => navigate("/register")}>
        Create a new account
      </p>
    </div>
  </div>
);

 
}
