import React from 'react'
import PageHeader from '../../components/page-header/PageHeader';
import './login.scss';
import bg from '../../assets/footer-bg.jpg';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

import { Link } from 'react-router-dom';


const Register = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        criteriaMode: "all"
    });
    const password = watch('password');

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <PageHeader>
            </PageHeader>
            <div className="container">
                <div className="section">
                    <div className="login-content">

                        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                            <h1>Sign Up</h1>
                            <div className="login-form__input">
                                <label>
                                    <input

                                        placeholder="Email"
                                        className="login-form__input__item"
                                        {...register("email", {
                                            required: "This input is required.",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "This input is Email only."
                                            },
                                        })}
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="email"
                                        render={({ messages }) => {
                                            console.log("messages", messages);
                                            return messages
                                                ? Object.entries(messages).map(([type, message]) => (
                                                    <p key={type}>{message}</p>
                                                ))
                                                : null;
                                        }}
                                    />
                                </label>

                                <label>
                                    <input

                                        placeholder="Name"
                                        className="login-form__input__item"
                                        {...register("name", {
                                            required: "This input is required.",
                                            minLength: {
                                                value: 6,
                                                message: "This input must exceed 5 characters"
                                            },
                                        })}
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="name"
                                        render={({ messages }) => {
                                            console.log("messages", messages);
                                            return messages
                                                ? Object.entries(messages).map(([type, message]) => (
                                                    <p key={type}>{message}</p>
                                                ))
                                                : null;
                                        }}
                                    />
                                </label>

                                <label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="login-form__input__item"
                                        {...register("password", {
                                            required: "This input is required.",
                                            minLength: {
                                                value: 6,
                                                message: "This input must exceed 5 characters"
                                            },
                                        })}
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="password"
                                        render={({ messages }) => {
                                            console.log("messages", messages);
                                            return messages
                                                ? Object.entries(messages).map(([type, message]) => (
                                                    <p key={type}>{message}</p>
                                                ))
                                                : null;
                                        }}
                                    />
                                </label>

                                <label>
                                    <input
                                        type="password"
                                        placeholder="Repeat Password"
                                        className="login-form__input__item"
                                        {...register("rePassword", {
                                            required: "This input is required.",
                                            validate: (value) =>
                                                value === password || "The password do not match"
                                        })}
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="rePassword"
                                        render={({ messages }) => {
                                            console.log("messages", messages);
                                            return messages
                                                ? Object.entries(messages).map(([type, message]) => (
                                                    <p key={type}>{message}</p>
                                                ))
                                                : null;
                                        }}
                                    />
                                </label>
                            </div>
                            <button
                                className="login-form__button__signin"
                                type="submit"
                            >
                                Sign Up
                            </button>

                            {/* <div className="login-form__orther">
                                New to Movies?{' '}
                                <Link to="/register" >
                                    Sign up now
                                </Link>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register