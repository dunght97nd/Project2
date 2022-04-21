import React from 'react'
import PageHeader from '../../components/page-header/PageHeader';
import './login.scss';
import bg from '../../assets/footer-bg.jpg';



const Login = () => {
    return (
        <>
            <PageHeader>
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <div className="login-content">
                        <form className="login-form">
                            <h1>Sign In</h1>
                            <div className="login-form__input">
                                <label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="login-form__input__item"
                                    />
                                </label>
                                <label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="login-form__input__item"
                                    />
                                </label>
                            </div>
                            <button
                                className="login-form__button__signin"
                                type="submit"
                            >
                                Sign In
                            </button>
                            <div className="login-form__orther">
                                New to Netflix?{' '}
                                <a>
                                    Sign up now
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login