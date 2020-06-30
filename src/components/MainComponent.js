import React,{Component} from 'react';
import Todolist from './TodolistComponent';

class Main extends Component{
    
    constructor()
    {
        super();
    
    this.state={
         
       items:[
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
            ]
        };
        this.addTodo= this.addTodo.bind(this);
    }
    render(){
        let heading="todo list";
            return(
            <div className="container">
                <div className="row">
                    <Todolist heading={heading} 
                        addTodo={this.addTodo}
                        items={this.state.items} />
                    </div>
                </div>
              );
            }
    addTodo(text) {
        let nextId = this.state.items.length + 1
        let item = {
            id: nextId,
            text: text
        };
        let updatedList = this.state.items.concat([item]);

        this.setState({
            items: updatedList
        })
    }   
}
export default Main;