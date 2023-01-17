import classes from "./NewPostForm.module.css"
import { useRef, useContext, useState } from 'react';
import { DBContext } from "../../contexts/db-context/db-context"

function NewPostForm() {
    const dbContext = useContext(DBContext);

    const titleInput = useRef();
    const contentInput = useRef();
    const [ visibility, setVisibility ] = useState()

    function submitHandler(e) {
        e.preventDefault();

        dbContext.savePost(sessionStorage.userID, sessionStorage.userName, visibility, titleInput.current.value, contentInput.current.value)

        titleInput.current.value = ''
        contentInput.current.value = ''
    }


    function onChangeHandler(e) {
        setVisibility(e.target.value)
    }

    return (
        <form className={classes.panel}>
            <div className={classes.row_row} onChange={onChangeHandler}>
                <span>
                    <input className={classes.privacy_selector} type="radio" name="visibility" id="private_visibility" value="private" />
                    <label htmlFor="private_visibility">DONT TELL THIS TO ANYONE, OK?</label>
                </span>
                <span>
                    <input className={classes.privacy_selector} type="radio" name="visibility" id="friends_visibility" value="friends" />
                    <label htmlFor="friends_visibility">ONLY MY FRIENDS KNOW THIS</label>
                </span>
                <span>
                    <input className={classes.privacy_selector} type="radio" name="visibility" id="public_visibility" value="everyone" />
                    <label htmlFor="public_visibility">THIS IS NOT A SECRET</label>
                </span>
            </div>
            <div className={classes.row_col}>
                <label className={classes.label} htmlFor="title_input">Title</label>
                <input ref={titleInput} className={classes.title_input} type="text" name="title" id="title_input" />
            </div>
            <div className={classes.row_col}>
                <label className={classes.label} htmlFor="content_input">Content</label>
                <textarea ref={contentInput} className={classes.content_input} name="content" id="content_input" cols="50" rows="10" />
            </div>
            <div className={classes.row_col}>
                <input className={`${classes.btn} ${classes.submit}`} type="submit" value="POST" onClick={submitHandler} disabled={visibility == undefined ? true : false} />
                <input className={`${classes.btn} ${classes.reset}`} type="reset" value="RESET" />
            </div>
        </form>
    )
}

export default NewPostForm;