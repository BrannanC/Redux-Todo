import React from 'react';
import { connect } from 'react-redux';

import { toggleCompleted, deleteItem } from '../actions';
import Todo from './Todo';

class TodoList extends React.Component{

    toggleCompleted = (id) => {
        this.props.toggleCompleted(id);
    }

    deleteItem = (e, id) => {
        e.preventDefault();
        this.props.deleteItem(id);
    }

    render(){
        return (
            <p>        
              {this.props.todos.map(x => <Todo 
                        item={x} 
                        key={x.id} 
                        toggleCompleted={this.toggleCompleted} 
                        deleteItem={this.deleteItem}
                        />)}
            </p>
          );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, { toggleCompleted, deleteItem })(TodoList);