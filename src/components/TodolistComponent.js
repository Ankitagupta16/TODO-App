import React from 'react';
import Header from './headerComponent';
import FilteredList from './FilteredListComponent';
import Footer from './FooterComponent';
import {applyFilter} from '../shared/filter';

function Todolist(props){
    const {heading,items,addTodo,filter,changeFilter,changeStatus}=props;
    const count = items.length;
    const filteredItems = applyFilter(items, filter);

    
    return(
        <div className="todolist">
            <Header heading={heading} addTodo={addTodo}/>
            <FilteredList items={filteredItems} changeStatus={changeStatus}/>
            <Footer {...{count,filter,changeFilter}}/>
            </div>
            
           
    )
}

export default Todolist; 

