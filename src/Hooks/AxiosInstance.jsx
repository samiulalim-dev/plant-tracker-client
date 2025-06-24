import axios from "axios";
import React, { use, useEffect } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

// const useAxiosInstance = () => {
//   const { users } = use(AuthContext);
//   const token = users.accessToken;
//   console.log(token);

//   //   Request Interceptors
//   axiosSecure.interceptors.request.use((config) => {
//     if (users?.email) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

//   //   response interceptors
//   axiosSecure.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       return <p>not okay</p>;
//     }
//   );

//   return axiosSecure;
// };

const useAxiosInstance = () => {
  const { users, signOutUser } = use(AuthContext);

  useEffect(() => {
    // Clear any existing interceptors to avoid duplicates
    axiosSecure.interceptors.request.eject(
      axiosSecure.interceptors.request.handlers[0]?.id
    );

    //  request interceptor
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (users?.email && users?.accessToken) {
          config.headers.authorization = `Bearer ${users.accessToken}`;
        } else {
          delete config.headers.authorization;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          signOutUser()
            .then((result) => {
              console.log("signout for invalid token");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors for component unmount or when users change
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [users, signOutUser]);

  return axiosSecure;
};

export default useAxiosInstance;
