import React from 'react';
import './LoginForm.css'
import FbIcon from '../../assets/icons/fb-icon.png'
import GoogleIcon from '../../assets/icons/google-icon.png'
import { Link } from 'react-router-dom';


const LoginForm = () => {
    return (
        <>
            <div className="login__area">
                <div className="login__box">
                    <h3>Login</h3>
                    <form>
                        <div className="inputBox">
                            <input type="text" placeholder="Username or Email" />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="inputBoxBottom">
                            <div>
                                <input type="checkbox" id="checkLogin" /> <label htmlFor="checkLogin">Remember Me</label>
                            </div>
                            <div>
                                <Link to="/forgot-password">Forgot Password</Link>
                            </div>
                        </div>

                        <button className="app__btn login__btn" type="submit">Login</button>
                        <p>
                            Don't have an account? <Link to="/register">Create an account</Link>
                        </p>
                    </form>
                </div>
                <br />
                <p className="login__divider">Or</p>
                <button className="social__login__btn"> <img src={GoogleIcon} alt="" /> <span>Continue with Google</span></button>
                <button className="social__login__btn"> <img src={FbIcon} alt="" /> <span>Continue with Facebook</span></button>
            </div>

        </>
    );
};

export default LoginForm;