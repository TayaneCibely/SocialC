import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CiRedo } from "react-icons/ci";


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login-screen">
      <div className="login">
        <div className="header">
          <span className="text-wrapper">Olá,</span>
          <p className="loginDesc">
            Para continuar navegando de forma segura, efetue o login.
          </p>
        </div>
        <div className="form">
          <div className="login-label">
            <span className="login-form">Login</span>
            <form onSubmit={handleClick}>
              <input placeholder="Usuário" type="email" className="loginInput" ref={email} />
              <input placeholder="Senha"type="password" className="loginInput" ref={password} />

              <button className="loginButton" type="submit" disabled={isFetching}>
                {isFetching ? (
                  <CiRedo />
                ) : (
                  "Entrar"
                )}
                </button>
              <span className="loginRegister">
                  Novo por aqui? <Link to="/register"><b className="registre-se">Registre-se</b></Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
