import axios from "axios";
import {DEFAULT_USER_SETTINGS_PROPS, TOAST_SETTINGS} from "../constants/constants";
import {toast} from "react-toastify";

const apiUrl ='https://pomodorobackend-lte8.onrender.com';
export const updateTimerSettings = async (token : string, settings: DEFAULT_USER_SETTINGS_PROPS) => {
    try {
        const response = await axios.put(`${apiUrl}/auth/updateSettings`, settings, {
            headers: {
                "Authorization": token,
            },
        });
        return response.data.message;
    } catch (error) {
        console.error("Ошибка при обновлении настроек таймера:", error);
    }
};
export const getUser = async (token : string) => {
    try {
        const response = await axios.get(`${apiUrl}/auth/getUser`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        return null;
    }
};

export const verifyToken = async (token: string) => {
    try {
        const response = await axios.get(`${apiUrl}/verify/verify-token`, {
            headers: {
                Authorization: token,
            },
        });
        if (response) {
            return response;
        } else {
            throw new Error("We don't have data");
        }
    } catch (error: any) {
        return {error: error.response.data.message};
    }
};

export const fetchTimerSettings = async (token : string) => {
    try {
        const response = await axios.get(`${apiUrl}/auth/getSettings`, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении настроек таймера:", error);
        return null;
    }
};


export const auth = async (mode: string, values: any) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/${mode == "login" ? "login" : "registration"}`, {
                username: values.name,
                password: values.password,
            }
        );

        return response.data
    } catch (error) {
        if (mode === 'registration') {
            toast.error("Error. User already Exist", TOAST_SETTINGS);
        }
        console.error("Error: ", error);
    }
};
