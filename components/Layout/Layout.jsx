import classes from "./Layout.module.css"

function Layout(props) {
    return <main className={classes.layout} style={{ width: `${props.width}%` }}> {props.children}</main >
}

export default Layout;