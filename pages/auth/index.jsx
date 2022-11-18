import classes from "./AuthPage.module.css"
import { useState, useContext, useRef, useEffect } from 'react'
import { Layout } from "../../components"
import { AuthContext } from "../../contexts/auth-context/auth-context"


const BIG_SMILE = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif"
const SLIGHT_SMILE = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.gif"
const SHHH = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f92b/512.gif"
const HAPPY_SMILE = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f603/512.gif"
const LOVE = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif"

function AuthPage() {
    const authContext = useContext(AuthContext)
    const [ userName, setUserName ] = useState("__________")
    const [ emojiUrl, setEmojiUrl ] = useState(BIG_SMILE)
    const userNameInput = useRef();
    const userPasswordInput = useRef();
    const userEmailInput = useRef();
    const userGenderInput = useRef();
    const userPersonalityInput = useRef();
    const registerBtn = useRef();
    const loginBtn = useRef();
    const row_1 = useRef();
    const row_2 = useRef();
    const row_3 = useRef();
    const row_4 = useRef();
    const row_5 = useRef();
    const registerFormSelector = useRef();
    const loginFormSelector = useRef();
    const form = useRef();

    useEffect(() => {
        registerFormSelector.current.click();
    }, [])

    function formChangeHandler(e) {
        const formName = e.target.name
        console.log(formName)
        if (formName == 'register') {
            registerFormSelector.current.classList.add(classes.selected)
            loginFormSelector.current.classList.remove(classes.selected)

            registerBtn.current.style.display = "block"
            loginBtn.current.style.display = "none";

            row_1.current.style.display = "block"
            row_2.current.style.display = "block"
            row_3.current.style.display = "block"
            row_4.current.style.display = "block"
            row_5.current.style.display = "block"

        } else if (formName == 'login') {
            registerFormSelector.current.classList.remove(classes.selected)
            loginFormSelector.current.classList.add(classes.selected)

            loginBtn.current.style.display = "block";
            registerBtn.current.style.display = "none"

            row_1.current.style.display = "block"
            row_2.current.style.display = "block"
            row_3.current.style.display = "none"
            row_4.current.style.display = "none"
            row_5.current.style.display = "none"

        }

    }

    function onChangeHandler(e) {
        setUserName(e.target.value)
    }

    function btnClickHandler(e) {
        e.preventDefault();
        const elementName = e.target.name;

        if (elementName === 'register_btn') {
            const userName = userNameInput.current.value;
            const userPassword = userPasswordInput.current.value;
            const userEmail = userEmailInput.current.value;
            const userGender = userGenderInput.current.value;
            const userPersonality = userPersonalityInput.current.value;
            authContext.register(userName, userPassword, userEmail, userGender, userPersonality);

        } else if (elementName === 'login_btn') {
            const userName = userNameInput.current.value;
            const userPassword = userPasswordInput.current.value;
            authContext.login(userName, userPassword)
        }
        form.current.reset();
    }

    return (
        <Layout width={50}>
            <div className={`${classes.form_container} card`}>
                <img src={emojiUrl} alt="😀" width={100} height={100} />
                <div className={classes.form_selector}>
                    <button ref={registerFormSelector} onClick={formChangeHandler} name="register" className={classes.selected}>Register</button>
                    <button ref={loginFormSelector} onClick={formChangeHandler} name="login" >Login</button>
                </div>
                <form ref={form} className={`${classes.form}`}>
                    <div ref={row_1} className={classes.row}>
                        <label htmlFor="user_name_input">Tell me your nickname?</label>
                        <input ref={userNameInput} type="text" name="user_name" id="user_name_input" onChange={onChangeHandler} />
                    </div>
                    <div ref={row_2} className={classes.row}>
                        <label htmlFor="user_password_input">Secret code?</label>
                        <input ref={userPasswordInput} type="password" name="user_name" id="user_password_input" />
                    </div>
                    <div ref={row_3} className={classes.row}>
                        <label htmlFor="user_email_input">Give me your email so I can contact you.</label>
                        <input ref={userEmailInput} type="email" name="user_email" id="user_email_input" />
                    </div>
                    <div ref={row_4} className={classes.row}>
                        <label htmlFor="user_gender_input">Are you a boy or a girl?</label>
                        <select ref={userGenderInput} name="user_gender" id="user_gender_input">
                            <option value={"boy"}>Boy</option>
                            <option value={"girl"}>Girl</option>
                        </select>
                    </div>
                    <div ref={row_5} className={classes.row}>
                        <label htmlFor="user_personality_input">Introvert or Extrovert?</label>
                        <select ref={userPersonalityInput} name="user_personality" id="user_personality_input">
                            <option value={"introvert"}>Introvert</option>
                            <option value={"extrovert"}>Extrovert</option>
                        </select>
                    </div>
                    <div className={classes.row}>
                        <button ref={registerBtn} name="register_btn" className={`${classes.btn} ${classes.login_btn}`} onClick={btnClickHandler}>
                            Hi I'm {userName}
                        </button>
                        <button ref={loginBtn} name="login_btn" className={`${classes.btn} ${classes.login_btn}`} onClick={btnClickHandler}>
                            I'm Back
                        </button>
                    </div>
                </form>
            </div>
        </Layout >
    )
}

export default AuthPage;