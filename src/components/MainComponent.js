import React,{Component} from 'react';
import Todolist from './TodolistComponent';
import {FILTER_ALL} from '../shared/filter';
import {getAll, addToList,updateStatus} from '../shared/todo';
import {MODE_NONE} from '../shared/mode';

class Main extends Component{
    
    constructor()
    {
        super();
    
    this.state={ 
        items:getAll(),
        filter:FILTER_ALL
        }
    
    this.addTodo= this.addTodo.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
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

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.items, itemId, completed);

        this.setState({items: updatedList});
    }
    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    setSearchQuery(text) {
        this.setState({query: text || ''});
    }

    render(){
        let heading="todo list";
            return(
            <div className="container">
                <div className="row">
                    <Todolist heading={heading} 
                        addTodo={this.addTodo}
                        changeFilter={this.changeFilter}
                        changeStatus={this.changeStatus}
                        {...this.state} //to send all state elements
                    />
                    </div>
                </div>
              );
            }
      
}
export default Main;