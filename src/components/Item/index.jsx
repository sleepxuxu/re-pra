import React, { Component } from 'react';

class Item extends Component {
    state ={mouse:false}
    handleMouse = (flag) => {
      return () => {
         this.setState({mouse:flag})
      }
    }
    handleCheck = (order) =>{
        return (event) => {
             //console.log(order,event.target.checked);
            this.props.updateTodo(order,event.target.checked)
        }
    }
    handleDelete = (order) =>{
      if (window.confirm('确定删除吗？')){
        this.props.deleteTodo(order)
      }
    }
    render() {
        const {order,work, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse? '#ddd':'#ffffff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(order)} />
                    <span>{work}</span>
                </label>
                <button className="btn btn-danger" style={{ display:mouse? 'block':'none' }} onClick={()=>this.handleDelete(order)}>
                    删除
                </button>
            </li>
        );
    }
}

export default Item;