import React, { Component } from 'react'
import '../App.css';
import Header from './Header';
import Search from './Search'
import TableData from './TableData'
import AddUser from './AddUser';

import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {},
    }
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentDidMount() {
    // kiểm tra có localStorage hay chưa?
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      let temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
    
  }
  deleteUser = (idUser) => {
    //func filter lọc những phần tử khác một giá trị nào đó
    let tempData = this.state.data
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    })
    localStorage.setItem("userData",JSON.stringify(tempData))
  }
  getUserEditInfoApp=(info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    localStorage.setItem("userData",JSON.stringify(this.state.data))
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  changeState = ()=> {
    this.setState({
      viewForm: !this.state.viewForm,
    })
  }
  getTextSearch = (dl)=> {
    this.setState({
      searchText: dl
    })
  }
  getNewUserData = (name,tel,Permission)=> {
    var items = this.state.data;
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    items.push(item);
    this.setState({
      data: items
    })
    console.log(items);
    localStorage.setItem("userData",JSON.stringify(items))

  }
  editUser = (user) => {
    this.setState({
      userEditObject: user
    })
    console.log(user);
  }

  render() {
    // localStorage.setItem("userData",JSON.stringify(DataUser))
    var result = [];
    this.state.data.forEach((item)=> {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    })
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
                  getUserEditInfoApp={(info) => {this.getUserEditInfoApp(info)}}
                  changeState = {() => this.changeState()} 
                  viewForm={this.state.viewForm} 
                  checkConnectProps={(dl) =>this.getTextSearch(dl)}
                  editUserStatus={this.state.editUserStatus}
                  changeEditUserStatus={() => {this.changeEditUserStatus()}}
                  userEditObject={this.state.userEditObject}
                  />
              <TableData 
                  deleteUser={(idUser) => {this.deleteUser(idUser)}}
                  dataUserProps ={result} 
                  editFunc={(user) => this.editUser(user)}
                  changeEditUserStatus={() => {this.changeEditUserStatus()}}
                />
              <AddUser 
                  viewForm={this.state.viewForm}
                  add={(name,tel,Permission) => {this.getNewUserData(name,tel,Permission)}}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;

