import axios from "axios";
const apiURL: string | undefined = process.env.REACT_APP_API_URL;

export const signInUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${apiURL}/users/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
