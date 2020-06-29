import React from 'react';
import Todolist from './TodolistComponent';

function Main (){
    
    let heading="todo list";
    let items=[
        {
            id:1,
            text:'Complete Java assignment',
            done:false
        },
        {
            id:2,
            text:'Buy vegetables',
            done:false
        },
        {
            id:3,
            text:'Pay electricty bill',
            done:false
        },
        {
            id:4,
            text:'Fix kitchen bulb ',
            done:false
        },
        {
            id:5,
            text:'Buy home decore',
            done:false
        }
    ];
    
    return(
        <div className="container">
            <div className="row">
                <Todolist heading={heading} items={items} />
                </div>
            </div>
    );
}
export default Main;