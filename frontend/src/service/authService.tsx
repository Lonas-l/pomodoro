import axios from "axios";
import {DEFAULT_USER_SETTINGS_PROPS} from "../constants/constants";

export const updateTimerSettings = async (token : string, settings: DEFAULT_USER_SETTINGS_PROPS) => {
    try {
        const response = await axios.put("http://localhost:8081/auth/updateSettings", settings, {
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
        const response = await axios.get("http://localhost:8081/auth/getUser", {
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
        const response = await axios.get("http://localhost:8081/verify/verify-token", {
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
        const response = await axios.get("http://localhost:8081/auth/getSettings", {
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