import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item'

class List extends Component {
    	//对接受的props类型及必要性的限制
	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
	};
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
               {
                   todos.map(todo => {
                       return <Item key={todo.order} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                   })
               }
        </ul>
        );
    }
}

export default List;