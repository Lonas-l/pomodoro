import React, {useState} from "react";
import "./AuthPage.scss";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import {TOAST_SETTINGS} from "../../constants/constants";
import {auth} from "../../service/authService";

interface AuthProps {
    mode: "login" | "registration";
    onLoginSuccess: () => void;
}

interface FormValues {
    name: string;
    password: string;
    confirmPassword: string;
}

function AuthPage({mode, onLoginSuccess}: AuthProps) {
    let navigate = useNavigate();

    const SignupSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        password: Yup.string()
            .test("password-validation", "Password must be at least 4 characters and at most 32 characters", function (value: string | undefined) {
                return Yup.string()
                    .min(4, "Password must be at least 4 characters")
                    .max(32, "Password must be at most 32 characters").required()
                    .isValidSync(value);
            })
            .required("Required"),
        confirmPassword: Yup.string()
            .test("confirm-password-validation", "Password must be the same", function (value, context) {
                if (mode === 'registration') {
                    if (value !== context.parent.password) {
                        return new Yup.ValidationError("Passwords must match", value, "confirmPassword");
                    }
                }
                return true;
            })
    });

    return (
        <Formik<FormValues>
            initialValues={{
                confirmPassword: "",
                password: "",
                name: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: FormValues) => {
                auth(mode, values).then((data) => {
                        if (mode == "registration" && data) {
                            navigate("/login");
                            toast.success("Registration Complete, you can authorize", TOAST_SETTINGS);
                        }

                        if (mode === "login" && data) {
                            onLoginSuccess();
                            localStorage.setItem("accessToken", data?.token);
                            navigate(mode === "login" ? "/" : "/login");
                        }
                    }
                );
            }}
        >
            {({errors, touched, handleChange, values}: any) => (
                <Form className={"auth"}>
                    <h3 className={"authTitle"}>{mode}</h3>
                    <div className={"inputSection"}>
                        <label className={"inputLabel"} htmlFor="name">Name</label>
                        <Field className={"input"} placeholder={"Enter Your Name"} name="name" data-testid={'authName'}/>
                        {mode === "registration" && errors.name && <div className={"error"}>{errors.name}</div>}
                    </div>

                    <div className={"inputSection"}>
                        <label className={"inputLabel"} htmlFor="password">Password</label>
                        <Field className={"input"} type={"password"} placeholder={"Enter Your Password"}
                               name="password" data-testid={'authPassword'}/>
                        {mode === "registration" && errors.password && <div className={"error"}>{errors.password}</div>}
                    </div>

                    {mode === "registration" && <div className={"inputSection"}>
                        <label className={"inputLabel"} htmlFor="confirmPassword">Confirm Your Password</label>
                        <Field name="confirmPassword" type={"password"} placeholder={"Confirm Your Password"}
                               className={"input"} data-testid={'authConfirmPassword'}/>
                        {errors.confirmPassword && <div className={"error"}>{errors.confirmPassword}</div>}
                    </div>}

                    <Button disabled={errors.name || errors.password || errors.confirmPassword}
                            className={"submitButton"}  dataTestId={'authConfirmButton'} type="submit" mode={""}
                            variant={"secondary"}>
                        {mode == "login" ? "Log In" : "Registration"}
                    </Button>

                    <Button className={"button"} onClick={() => {
                        values.password = '';
                        values.confirmPassword = '';
                        values.name = '';
                        if (mode === "login") navigate("/registration");
                        else navigate("/login");
                    }} mode={""} type={"button"}
                            variant={"secondary"} dataTestId={'authChangeModeButton'}>
                        {mode == "login" ? "Registration" : "Log In"}
                    </Button>

                </Form>
            )}
        </Formik>
    );
}

export default AuthPage;
