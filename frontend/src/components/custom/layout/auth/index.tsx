import React from 'react'
import styles from "./styles.module.css"

type PropTypes = {
    children:  React.ReactNode
}

const AuthLayout = ({children} : PropTypes) => {
    return(
        <div className={styles["container"]}>
            {children}
        </div>
    )
}

export default AuthLayout;