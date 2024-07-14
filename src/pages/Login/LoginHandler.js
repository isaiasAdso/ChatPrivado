import { LoginUser } from "../../Api/Cookie";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const handleSubmit = async (event, ValoresUsuario, navigate, setValorCookie) => {
  event.preventDefault();

  try {
    const { token } = await LoginUser(ValoresUsuario);
    Cookies.set("Cookie", token, { expires: 7 });
    setValorCookie(token);
    toast.success("Inicio de sesión exitoso.", {
      autoClose: 1000,
      onClose: () => navigate("/"),
    });
  } catch (error) {
    toast.error("Nombre de usuario o contraseña incorrectos");
  }
};
