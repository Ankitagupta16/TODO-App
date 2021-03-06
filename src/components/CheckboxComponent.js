import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {checked} = e.target;

        this.setState({checked});
        this.props.onChange(checked);
    }

    render() {
        return (<input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>);
    }
}

export default CheckBox;