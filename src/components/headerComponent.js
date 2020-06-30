import React from 'react';
import InputTab from './InputTabComponent';

function Header(props){
    const {heading,addTodo}=props;
    return(
        <header>
            <h1>{heading.toUpperCase()}</h1>
            <InputTab addTodo={addTodo}/>
        </header>
    );
}

export default Header;