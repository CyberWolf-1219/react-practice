import classes from "./Navigation.module.css"
import Link from "next/link"
import { AuthContext } from "../../contexts/auth-context/auth-context";
import { useContext } from "react";
AuthContext

function Navigation() {
    const { logout } = useContext(AuthContext)


    return (
        <nav className={classes.navbar}>
            <ul className={classes.nav_item_container}>
                <li className={classes.nav_item}>
                    <Link href={`/`} >
                        HOME
                    </Link>
                </li>
                <li className={classes.nav_item}>
                    <Link href={`/posts`} >
                        POSTS
                    </Link>
                </li>
                <li className={classes.nav_item}>
                    <Link href={`/profile`}>
                        PROFILE
                    </Link>
                </li>
            </ul>
            <button className={classes.logout_btn} onClick={logout}>LOG OUT</button>
        </nav>
    )
}

export default Navigation;