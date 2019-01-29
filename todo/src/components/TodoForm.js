import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class TodoForm extends React.Component {
    state = {
        newItem: ''
    }

    handleChanges = e => {
        this.setState({ newItem: e.target.value });
      };
    
    addItem = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newItem);
    this.setState({
        newItem: ''
    })
    };

    render(){
        return (
            <form className="TodoForm" onSubmit={this.addItem} >
                <input type="text" placeholder="Add new item..." value={this.state.newItem} onChange={this.handleChanges} />
                <button type="submit">Add Item</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, { addTodo })(TodoForm);