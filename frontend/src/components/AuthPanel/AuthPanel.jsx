import "./AuthPanel.css"
import React, { useRef, useContext } from "react";
import { AuthContext } from "../../context/Auth/auth-context";

const AuthPanel = () => {
    const userNameInput = useRef();
    const userPasswordInput = useRef();
    const authContext = useContext(AuthContext);

    return (
        <div className="auth_panel">
            <div className="form">
                <div className="row">
                    <h2>INTRODUCE YOURSELF</h2>
                </div>
                <div className="row">
                    <label htmlFor="user_name_input">Nickname: </label>
                    <input ref={userNameInput} type="text" name="use_name" id="user_name_input" />
                </div>
                <div className="row">
                    <label htmlFor="user_password_input">Password: </label>
                    <input ref={userPasswordInput} type="text" name="user_password" id="user_password_input" />
                </div>
                <div className="row">
                    <button type="submit" onClick={
                        (e) => {
                            e.preventDefault();
                            authContext.login(userNameInput.current.value, userPasswordInput.current.value);
                            userNameInput.current.value = "";
                            userPasswordInput.current.value = "";

                        }
                    }
                    >
                        GET IN!
                    </button>
                    <button type="submit" onClick={
                        (e) => {
                            e.preventDefault();
                            authContext.register(userNameInput.current.value, userPasswordInput.current.value);
                            userNameInput.current.value = "";
                            userPasswordInput.current.value = "";
                        }
                    }
                    >
                        REGISTER
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AuthPanel;