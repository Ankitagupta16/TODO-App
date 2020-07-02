import React from 'react';
import Header from './headerComponent';
import TodoItem from './todoItemComponent';
import Footer from './FooterComponent';
import {applyFilter} from '../shared/filter';

function Todolist(props){
    const {heading,items,addTodo,filter,changeFilter}=props;
    const count = items.length;
    const filteredList = applyFilter(items, filter);

    
    return(
        <div className="heading">
            <Header heading={heading} addTodo={addTodo}/>
            {filteredList.length > 0
                ? (
                    <ul className="list-unstyled">
                        {filteredList.map(item => <TodoItem key={item.id} data={item}/>)}
                    </ul>
                )
                : <p className="alert alert-info">There are no items.</p>
            }
            <Footer {...{count,filter,changeFilter}}/>
            </div>
            
           
    )
}

export default Todolist; 