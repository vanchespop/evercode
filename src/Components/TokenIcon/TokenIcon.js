import React from 'react';
import s from "./TokenIcon.module.css";
import cn from 'classnames'

function TokenIcon({size, token}) {
    const iconStyle = cn(s.container, s[size])

    return (
        <div className={iconStyle}>
            <span className={`icon icon-${token}`}/>
        </div>
    );
}

export default TokenIcon;
