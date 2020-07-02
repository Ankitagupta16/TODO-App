import React,{Component} from 'react';
import Todolist from './TodolistComponent';
import {FILTER_ACTIVE} from '../shared/filter';
import {getAll, addToList} from '../shared/todo';

class Main extends Component{
    
    constructor()
    {
        super();
    
    this.state={ 
        items:getAll(),
        filter:FILTER_ACTIVE
        }
    
    this.addTodo= this.addTodo.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    }


    addTodo(text) {
        let updatedList = addToList(this.state.items, {text, completed: false});

        this.setState({items: updatedList})
    } 


    changeFilter(key)
    {
        console.log("inside change key"+key);
        this.setState({filter:key});
    }
    render(){
        let heading="todo list";
            return(
            <div className="container">
                <div className="row">
                    <Todolist heading={heading} 
                        addTodo={this.addTodo}
                        changeFilter={this.changeFilter}
                        {...this.state} //to send all state elements
                    />
                    </div>
                </div>
              );
            }
      
}
export default Main;