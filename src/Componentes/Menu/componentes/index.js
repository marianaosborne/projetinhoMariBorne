import React from 'react';
import Button from '../Button'

function Button(props){
    //props => {className="ButtonLink" href="/"}
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>

    )


}

export default ButtonLink