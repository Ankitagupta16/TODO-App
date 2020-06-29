import React from 'react';

function Header(props){
    const {heading}=props;
    return(
        <h1>{heading.toUpperCase()}</h1>
    );
}

export default Header;