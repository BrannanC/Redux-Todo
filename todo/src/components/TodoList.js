import React from 'react';
import { connect } from 'react-redux';

import { toggleCompleted } from '../actions';
import Todo from './Todo';

class TodoList extends React.Component{

    toggleCompleted = (id) => {
        this.props.toggleCompleted(id);
    }

    render(){
        return (
            <p>        
              {this.props.todos.map(x => <Todo item={x} key={x.id} toggleCompleted={this.toggleCompleted} />)}
            </p>
          );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, { toggleCompleted })(TodoList);