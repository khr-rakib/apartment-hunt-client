import React from 'react';
import FbIcon from '../../assets/icons/fb-icon.png'
import GoogleIcon from '../../assets/icons/google-icon.png'
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <>
            <div className="login__area">
                <div className="login__box">
                    <h3>Create an account</h3>
                    <form>
                        <div className="inputBox">
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="Username or Email" />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Confirm Password" />
                        </div>


                        <button className="app__btn login__btn" type="submit">Create an account</button>
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
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

export default RegisterForm;