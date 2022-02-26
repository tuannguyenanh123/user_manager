import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-3">Project quản lí thành viên bằng ReactJS</h1>
                <p className="lead">với dữ liệu JSON</p>
                <hr className="my-2" />
            </div>
        </div>
    )
  }
}
