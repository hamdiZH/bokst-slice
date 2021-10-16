import axios from "axios";
import Cookies from "js-cookie";

const accessToken = Cookies.get("accessToken");

const instance = axios.create({
  baseURL:
    process.env["REACT_APP_API_BASE_URL "] || "https://box.smartpace.co.uk",
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  },
});

instance.interceptors.request.use(async (config) => {
  if (config.withCredentials) {
    config.withCredentials = false;

    if (accessToken) {
      config.headers.Authorization = `bearer ${accessToken}`;
    } else {
      window.location.replace("/login");
    }
  }

  return config;
});

// export function SetupAxios(axios, store) {
//   const UNACCEPTABLE = 406;
//   const { dispatch } = store; // direct access to redux store.
//   axios.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       const { status } = error.response;
//       if (status === UNACCEPTABLE) {
//         dispatch(logoutAction());
//       }
//       return Promise.reject(error);
//     }
//   );
// }

export default instance;
