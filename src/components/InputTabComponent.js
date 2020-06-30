import React,{Component} from 'react';

class InputTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
       
    }

    
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    clear() {
        this.setState({value: ''});
    }



    handleKeyUp(e) {
        const {addTodo} = this.props;
        const text = this.state.value.trim();

        if (e.keyCode === 13 && text) {
            addTodo(text);
            this.clear();
        }
    }

    render() {
        return (<input
            type="text"
            className="form-control add-todo"
            value={this.state.value}
            onKeyUp={this.handleKeyUp.bind(this)}
            onChange={this.handleChange.bind(this)}
            placeholder="Add New"
        />);
    }
}

export default InputTab;