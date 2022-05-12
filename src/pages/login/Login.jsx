import React, { useState } from 'react'
import PageHeader from '../../components/page-header/PageHeader';
import './login.scss';
// import bg from '../../assets/footer-bg.jpg';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

import { Link } from 'react-router-dom';

import { TabTitle } from '../../ultils/GeneralFunctions';

const Login = () => {
    TabTitle('The Movie Database | Login');

    // const { register, handleSubmit, formState: { errors } } = useForm();
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        criteriaMode: "all"
    });

    const onSubmit = (data) => console.log(data);


    const [passwordEye, setPasswordEye] = useState(false);
    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye);
    }

    return (
        <>
            <PageHeader>
            </PageHeader>
            <div className="container">
                <div className="section">
                    <div className="login-content">

                        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                            <h1>Sign In</h1>
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
                                        type={(passwordEye === false) ? 'password' : 'text'}
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

                                    <div className='login-form__icon'>
                                        {
                                            (passwordEye === false) ?
                                                <i className='bx bx-hide' onClick={handlePasswordClick}></i>
                                                :
                                                <i className='bx bx-show-alt' onClick={handlePasswordClick}></i>
                                        }
                                    </div>
                                </label>
                            </div>
                            <button
                                className="login-form__button__signin"
                                type="submit"
                            >
                                Sign In
                            </button>

                            <div className="login-form__orther">
                                New to Movies?{' '}
                                <Link to="/register" >
                                    Sign up now
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login