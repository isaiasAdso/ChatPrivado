import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthCookie from "../../Hooks/AuthCookie";
import { LoginUser } from "../../Api/Cookie";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { setValorCookie } = AuthCookie();
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [ValoresUsuario, setValoresUsuario] = useState({
    telefono: "",
    passwordHash: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Manejar el envío del formulario

    try {
      const { token } = await LoginUser(ValoresUsuario);
      Cookies.set("Cookie", token, { expires: 7});
      setValorCookie(token);
      toast.success("Inicio de sesión exitoso.", {
        autoClose: 1000,
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error("Nombre de usuario o contraseña incorrectos");
    }
  };

  const { telefono, passwordHash } = ValoresUsuario;

  return (
    <Container>
      <ToastContainer position="top-center" autoClose={1000} hideProgressBar />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="telefono">Teléfono:</Label>
          <Input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) =>
              setValoresUsuario({
                ...ValoresUsuario,
                telefono: e.target.value,
              })
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            id="password"
            value={passwordHash}
            onChange={(e) =>
              setValoresUsuario({
                ...ValoresUsuario,
                passwordHash: e.target.value,
              })
            }
            required
          />
        </FormGroup>
        <Button type="submit" disabled={submitButtonDisable}>
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Componentes estilizados
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Login;
