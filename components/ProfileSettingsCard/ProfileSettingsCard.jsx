import { useContext, useRef } from "react";
import classes from "./ProfileSettingsCard.module.css"
import { DBContext } from "./../../contexts/db-context/db-context"

function ProfileSettingsCard() {
    const dbContext = useContext(DBContext)
    const userNameInput = useRef();
    const userPasswordInput = useRef();
    const userEmailInput = useRef()
    const userBioInput = useRef()

    function onClickHandler(e) {
        e.preventDefault();
        const userName = userNameInput.current.value;
        const userPassword = userPasswordInput.current.value;
        const userEmail = userEmailInput.current.value;
        const userBio = userBioInput.current.value;

        if (userName, userPassword, userEmail, userBio) {
            dbContext.updateUserData(userName, userPassword, userEmail, userBio)
        } else {
            alert("😋: Don't be lazy. Enter all the data.")
        }


    }

    return (
        <div className={`${classes.layout} card`}>
            <h3>Enter Everything</h3>
            <div className={classes.top}>
                <div className={classes.col}>
                    <label className={classes.label} htmlFor="user_name">What Should Your Friends Call You?</label>
                    <input ref={userNameInput} className={classes.input} type="text" name="user_name" id="user_name" placeholder="" />
                </div>
                <div className={classes.col}>
                    <label className={classes.label} htmlFor="user_password">Password</label>
                    <input ref={userPasswordInput} className={classes.input} type="text" name="user_password" id="user_password" placeholder="Don't Type Infront of Anyone" />
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.row}>
                    <label className={classes.label} htmlFor="user_email">Your Email</label>
                    <input ref={userEmailInput} className={classes.input} type="email" name="user_email" id="user_email" placeholder="youareawesome@smile.com" />
                </div>
                <div className={classes.row}>
                    <label className={classes.label} htmlFor="user_bio">Enter one line bio.</label>
                    <input ref={userBioInput} className={classes.input} type="text" name="user_bio" id="user_bio" maxLength={50} placeholder="Only 50 Characters" />
                </div>
                <div className={classes.row}>
                    <input className={classes.input} type="button" value="SAVE" onClick={onClickHandler} />
                </div>
            </div>
        </div>
    )
}

export default ProfileSettingsCard;