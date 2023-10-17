import React from 'react'
import styles from "./styles.module.css"
import { Header } from './header'

type PropTypes = {
    children:  React.ReactNode
}

const MainLayout = ({children} : PropTypes) : JSX.Element => {
    return(
        <div className={styles["container"]}>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout;