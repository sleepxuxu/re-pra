import React, { Component } from 'react';
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {
	state = {
		users: [],
		isFirst: true, //是否为第一次打开页面
		isLoading: false, //loading状态
		err: '' //存储请求错误的相关信息
	};

	updateAppState = stateObj => {
		this.setState(stateObj);
    console.log(stateObj)
	};
	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState} />
				<List {...this.state} />
			</div>
		);
	}
}
