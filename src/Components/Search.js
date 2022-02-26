import React, { Component } from 'react'
import EditUser from './EditUser';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
      userObj: {},
    }
  }
 
  getUserEditInfo = (info) => {
    this.setState({
      userObj: info,
    })
    this.props.getUserEditInfoApp(info) // nhận info truyền cho app
  }
  viewBtnSwitch = ()=>{
    if(this.props.viewForm === true) {
      return  <div className="btn btn-block btn-outline-secondary mt-2" onClick={() => this.props.changeState()}>
                Đóng
              </div>
    }
    else{
      return <div className="btn btn-block btn-outline-info mt-2" onClick={() => this.props.changeState()}>
                Thêm mới
              </div>
    }
  }
  isChange = (event) => {
    this.setState({
      tempValue: event.target.value,
    })
    this.props.checkConnectProps(this.state.tempValue)
  }
  isShowEditForm = () => {
    if(this.props.editUserStatus){
        return  <EditUser 
                    getUserEditInfo={(info) => this.getUserEditInfo(info)}
                    changeEditUserStatus={() => {this.props.changeEditUserStatus()}}
                    userEditObject={this.props.userEditObject}
                  />
    }
  }

  render() {
    return (
        <div className="col-12">
          {
            this.isShowEditForm()
          }
          <form className="form-inline">
            <div className="form-group">
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Nhập tên cần tìm"
                onChange={(event)=>{
                  this.isChange(event);
                }}
              />
              <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>
                Tìm kiếm
              </div>
              {this.viewBtnSwitch()}
            </div>
          </form>
          <hr />
      </div>
    )
  }
}
export default Search;
