import React, { Component } from 'react'

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission,
        }
    }
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }
    saveButton = () => {
        var info = {};
        // lấy thông tin đã đc sửa đẩy vào info xong set vào func
        // getUserEditInfo truyền lên cho Component Search
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); // ẩn form

    }
  render() {
    return (
        <div className="row mb-4">
            <div className="col">
              <div className="card mt-2">
                <div className="card-header text-center">SỬA THÔNG TIN USER</div>
                <div className="card-body bg-secondary">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Tên</label>
                            <input
                            defaultValue={this.props.userEditObject.name}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Nhập tên"
                            name="name"
                            onChange={(e) => this.isChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Điện thoại</label>
                            <input
                            defaultValue={this.props.userEditObject.tel}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="tel"
                            placeholder="Nhập số điện thoại"
                            onChange={(e) => this.isChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <select className="form-control" 
                                    id="exampleFormControlSelect1" 
                                    name="Permission"
                                    defaultValue={this.props.userEditObject.Permission}
                                    onChange={(e) => this.isChange(e)}
                                    
                            >
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-block btn-primary"
                                type="button"
                                value="Lưu"
                                onClick={() => {
                                    this.saveButton()
                                }}
                            ></input>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
    )
  }
}
export default EditUser;