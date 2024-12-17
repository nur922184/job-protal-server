import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { Logout } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error caught in interceptor', error)

            if (error.status === 401 || error.status === 403) {
                console.log('need to logout the user')
                Logout()
                    .then(() => {
                        console.log('log out user')
                        navigate('/signin')

                    })
                    .catch(error => console.log(error))
            }

            return Promise.reject(error);
        })
    }, [])


    return axiosInstance;
};

export default useAxiosSecure;