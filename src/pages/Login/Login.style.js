import styled, { keyframes } from "styled-components";

// Definir la animación usando keyframes
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Componentes estilizados

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  position: relative;

  .ContainerLogo {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -60px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #ccc;
    transition: transform 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }

    .Logotipo {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      animation: ${pulseAnimation} 2s infinite;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem;
  color: white;
  background-color: #57d8d8;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #339999;
  }
`;
