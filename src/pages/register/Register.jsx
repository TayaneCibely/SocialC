import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [error, setError] = useState("");
  const nameRef = useRef();
  const usernameRef = useRef();
  const birthdateRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    // Validations
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Senhas não coincidem.");
      return;
    }

    const user = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      birthdate: formatBirthdate(birthdateRef.current.value),
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post("https://social-compass-server.onrender.com/auth/register", user);
      console.log(response.data); // Informações do usuário após o cadastro
      navigate("/login");
    } catch (err) {
      setError("Erro ao cadastrar usuário. Verifique os campos e tente novamente.");
    }
  };

  const formatBirthdate = (date) => {
    // Converte a data para o formato aaaa-mm-dd
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="register-screen">
      <div className="register">
        <div className="header">
          <h3 className="text-wrapper">Olá,</h3>
          <span className="registerDesc">
            Por favor, registre-se para continuar.
          </span>
        </div>
        <div className="form">
          <span className="register-label">Cadastro</span>
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Nome"
              required
              ref={nameRef}
              className="registerInput"
              maxLength="255"
            />
            <input
              placeholder="Usuário"
              required
              ref={usernameRef}
              className="registerInput"
              type="text"
              maxLength="255"
            />
            <input
              placeholder="Nascimento (dd/mm/aaaa)"
              required
              ref={birthdateRef}
              className="registerInput"
              type="text"
              pattern="\d{2}/\d{2}/\d{4}"
            />
            <input
              placeholder="Email"
              required
              ref={emailRef}
              className="registerInput"
              type="email"
              maxLength="255"
            />
            <input
              placeholder="Senha"
              required
              ref={passwordRef}
              className="registerInput"
              type="password"
              minLength="6"
              maxLength="50"
            />
            <input
              placeholder="Confirmar Senha"
              required
              ref={confirmPasswordRef}
              className="registerInput"
              type="password"
              minLength="6"
              maxLength="50"
            />
            <button className="registerButton" type="submit">
              Registrar-se
            </button>
            {error && <span className="registerError">{error}</span>}
            <span className="registerLogin">
              Já possui uma conta? <Link to="/login"><b className="logar">Faça Login</b></Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
