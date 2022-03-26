import React, { Component } from 'react';
import './index.css'

class List extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className="row abc">
              {
                  err? <h2 style={{color:'red'}}>{err}</h2> :
                  isFirst ? <h2>请输入关键字搜索</h2> :
                  isLoading ?<h2>Loading....</h2> :
                users.map((item) => {
                return (
                    <div className="card" key={item.id}>
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                        <img src={item.avatar_url} style={{ width: '100px' }} alt='heade-gallery' />
                    </a>
                    <p className="card-text">{item.login}</p>
                </div>
                )
              })
            }
        </div>
        );
    }
}

export default List;