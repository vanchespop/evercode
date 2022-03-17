import React from 'react';
import s from './Controls.module.css'
import ControlButton from "../ControlButton/ControlButton";

const controls = ['send', 'receive', 'swap'];

function Controls() {
    return (
        <div className={s.container}>
            {controls.map((btnType) => <ControlButton type={btnType}/>)}
        </div>
    );
}

export default Controls;
