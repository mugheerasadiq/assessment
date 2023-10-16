import React from 'react';
import styles from './styles.module.css'
import { SignupForm } from './form/form';

const Signup = () => {
    return(
        <div className={styles['container']}>
            <SignupForm />
        </div>
    )
}

export default Signup;