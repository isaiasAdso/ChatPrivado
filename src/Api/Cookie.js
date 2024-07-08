import axios from "axios";


export const LoginUser = async (valoresUsuario) => {
    const response = await axios.post(
        'https://localhost:7168/api/Usuarios/Login', 
        valoresUsuario,
        {
            headers: {
                'Content-Type': 'application/json',

            },
        }
    );
    return response.data;
};