import React, { Component } from 'react';

class Footer extends Component {
    // 全选和非全选
    handleCheckAll = () => {
      this.props.checkAllTodo();
    }
    // 清除已完成
    handelClick = () =>{
        this.props.finishClear();
    }
    render() {
       const {todos} = this.props
       //计算已完成的个数，总数
       const doneCount = todos.reduce((pre,todo)=>pre+ (todo.done? 1:0),0)
       const totalCount = todos.length;
        return (
            <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===totalCount} />
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{totalCount}
            </span>
            <button className="btn btn-danger" onClick={this.handelClick}>清除已完成任务</button>
        </div>
        );
    }
}

export default Footer;