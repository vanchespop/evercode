import React from 'react';
import styles from './ControlButton.module.css'
import cn from 'classnames'

function capitalize(word) {
    return word.replace(/\w/, (w) => w.toUpperCase())
}

function ControlButton(props) {
    return (
        <div className={styles.container}>
            <button className={cn(styles.btn, styles[props.type])}/>
            <p className={styles.text}>{capitalize(props.type)}</p>
        </div>

    );
}

export default ControlButton;
