import React, { Component } from 'react'

class TableDataRow extends Component {
    permisstionShow = ()=>{
        if(this.props.permisstion === 1){
            return "Admin"
        }else if(this.props.permisstion === 2){
            return "Moderator"
        }else {return "Normal User"}
    }
    editClick = ()=>{
        this.props.editFuncClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick = (idUser)=>{
        this.props.deleteButtonClick(idUser);
    }
  render() {
    return (
            <tr>
                    <td>{this.props.stt+1}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.tel}</td>
                    <td>    
                        {this.permisstionShow()}
                    </td>
                    <td>
                    <div className="btn-group" role="group" aria-label="Button group">
                        <div className="btn btn-warning edit" onClick={() => this.editClick()}>
                            <i className="fa fa-edit">Sửa</i>
                        </div>
                        <div className="btn btn-danger delete"
                            onClick={(idUser) => this.deleteButtonClick(this.props.id)}
                                >
                            <i className="fa fa-edit">Xóa</i>
                        </div>
                    </div>
                    </td>
                </tr>
    )
  }
}
export default TableDataRow