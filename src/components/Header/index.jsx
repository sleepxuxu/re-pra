import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid'

class Header extends Component {
    static propsTypes = {
        addTodo:PropTypes.func.isRequired,
    }
    handleKeyUp = (event) => {
        const {keyCode,target} = event;
        if (keyCode !== 13) return
       //console.log(target.value);
       if (target.value.trim() === ''){
           alert('输入不能为空')
           return
       }
       //准备一个对象
       const obj = {order:nanoid(), work:target.value, done:false}
       this.props.addTodo(obj)
       
    }
    render() {
        return (
            <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp = {this.handleKeyUp} />
        </div>
        );
    }
}

export default Header;