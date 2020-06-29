import React from 'react';
import Header from './headerComponent';
import TodoItem from './todoItemComponent';
import Footer from './FooterComponent';

function Todolist(props){
    const {heading,items}=props;
    const count = items.length;
    return(
        <div className="heading">
            <Header heading={heading}/>
            <ul className="list-unstyled">
                {items.map(item => <TodoItem key={item.id} data={item}/>)}
            </ul>
            <Footer count={count}/>
            </div>
            
           
    )
}

export default Todolist; 