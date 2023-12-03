import React, {useEffect, useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage/AuthPage";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {DEFAULT_USER_SETTINGS, TOAST_SETTINGS} from "./constants/constants";
import {getUser, verifyToken} from "./service/authService";

function App() {
    let navigate = useNavigate();
    const [user, setUser] = useState<any>({});
    const token = localStorage.getItem("accessToken") || "";
    const isAuthorize = localStorage.getItem("isAuthorize") || "";
    const [timerSettings, setTimerSettings] = useState(user?.settings || DEFAULT_USER_SETTINGS);
    const handleLoginSuccess = () => {
        toast.success("🦄 Login Complete", TOAST_SETTINGS);
        localStorage.setItem("isAuthorize", "true");
        navigate("/");
    };

    useEffect(() => {
        getUser(token).then((result) => {setUser(result);});
    }, []);

    useEffect(() => {
        if (token || token != "") {
            verifyToken(token)
                .then((result) => {
                    if ("error" in result) {
                        console.log("Error verification: ", result.error);
                    } else {
                        localStorage.setItem("isAuthorize", "true");
                    }
                })
                .catch((error) => {
                    console.error("Token verification error:", error);
                });
        }
    }, []);

    return (
        <div className={"App"}>
            {isAuthorize && <Header token={token}/>}

            <Routes>
                {isAuthorize && <Route path="/" element={<HomePage setTimerSettings={setTimerSettings}
                                                                            timerSettings={timerSettings}
                                                                   token={token}/>}/>}
                {!isAuthorize &&
                    <Route path="/login" element={<AuthPage onLoginSuccess={handleLoginSuccess} mode={"login"}/>}/>}
                {!isAuthorize &&
                    <Route path="/registration" element={<AuthPage onLoginSuccess={handleLoginSuccess}
                                                                   mode={"registration"}/>}/>
                }

                <Route
                    path="*"
                    element={<Navigate to={isAuthorize ? "/" : "/login"} replace/>}
                />
            </Routes>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                className={"toast"}
                limit={1}
                data-testId={'toastNotification'}
            />
        </div>
    );
}

export default App;
