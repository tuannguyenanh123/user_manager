import React, { Component } from 'react'

class AddUser extends Component {
   constructor(props) {
       super(props);
       this.state = {
        id: "",
        name: "",
        tel: "",
        Permission: "",
    }
   }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
        // package to item
        
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
        
    }
    checkState = () => {
        if(this.props.viewForm === true){
            return (
        <div className="col">
                <div className="card mt-2">
                <div className="card-header">Thêm mới user vào hệ thống</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Tên</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Nhập tên"
                            name="name"
                            onChange = {(event)=> this.isChange(event)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Điện thoại</label>
                            <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="tel"
                            placeholder="Nhập số điện thoại"
                            onChange = {(event)=> this.isChange(event)}
                            />
                        </div>
                        <div className="form-group">
                            <select className="form-control" 
                                    id="exampleFormControlSelect1" 
                                    name="Permission"
                                    onChange = {(event)=> this.isChange(event)}
                            >
                                <option value={1}>Chọn quyền mặc định</option>
                                <option value={2}>Admin</option>
                                <option value={3}>Moderator</option>
                                <option value={4}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-block btn-primary"
                                type="reset"
                                onClick={(name,tel,Permission) => this.props.add(this.state.name,this.state.tel,this.state.Permission)}
                                value="Thêm mới"
                            ></input>
                        </div>
                    </form>
                </div>
                </div>
        </div>
            )
        }
    }
  render() {
    return (
            <div>
                {/* {
                   this.viewBtn()
                } */}
                {
                    this.checkState()
                }
            </div>
      
    )
  }
}
export default AddUser;