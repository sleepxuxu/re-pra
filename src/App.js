//创建'外壳'组件app
import React from 'react';
import './app.css';
// 引入JSX组件
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends React.Component {
	state = {
		todos: [
			{
				order: '001',
				work: '吃',
				done: true
			},
			{
				order: '002',
				work: '睡觉',
				done: false
			},
			{
				order: '003',
				work: '写代码',
				done: true
			},
			{
				order: '0004',
				work: '玩游戏',
				done: true
			},
			{
				order: '005',
				work: '逛街',
				done: false
			}
		]
	};

	//接收的对象的新的todo对象
	addTodo = obj => {
		//通过解构赋值把this.state.todos结构出来
		const { todos } = this.state;
		//通过...运算符，讲新加入数据放到一个新数组并合并旧数组
		const newTodos = [obj, ...todos];
		//通过this.setState把新数组的值放入旧数组
		this.setState({ todos: newTodos });
	};

	updateTodo = (order, done) => {
		const { todos } = this.state;
		const newTodos = todos.map(todoObj => {
			if (todoObj.order === order) return { ...todoObj, done };
			else return todoObj;
		});
		this.setState({ todos: newTodos });
	};
	//删除todo
	deleteTodo = order => {
		const { todos } = this.state;
		const newTodos = todos.filter(todoObj => {
			return todoObj.order !== order;
		});
		this.setState({ todos: newTodos });
	};
	//底部全选
	checkAllTodo = () => {
		const { todos } = this.state;
		const newTodos = todos.map(todoObj => {
			return { ...todoObj, done: true };
		});
		this.setState({ todos: newTodos });
	};
	// 清除已选
	finishClear = () => {
		const { todos } = this.state;
		const newTodos = todos.filter(todoObj => {
			return todoObj.done !== true;
		});
		this.setState({ todos: newTodos });
	};
	render() {
		const { todos } = this.state;
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} finishClear={this.finishClear} />
				</div>
			</div>
		);
	}
}
