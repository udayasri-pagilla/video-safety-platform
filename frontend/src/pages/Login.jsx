// import React from "react";
// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div>
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
//       <button onClick={() => login(email, password)}>Login</button>
//     </div>
//   );
// }
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
    <div className="auth-container">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p onClick={() => navigate("/register")}>Create account</p>
    </div>
  );
}
