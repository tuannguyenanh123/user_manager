import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser)
    }
    mappingDataUser = ()=> this.props.dataUserProps?.map((value, key) => (
            <TableDataRow 
                id={value.id}
                userName={value.name} 
                key={key} stt={key} 
                tel={value.tel} 
                permisstion={value.Permission}
                editFuncClick={(user) => this.props.editFunc(value)}
                changeEditUserStatus={() => {this.props.changeEditUserStatus()}}
                deleteButtonClick={(idUser) => {this.deleteButtonClick(idUser)}}

            />
        ))
  render() {
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điên thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}
                </tbody>
            </table>
    </div>

    )
  }
}
export default TableData;