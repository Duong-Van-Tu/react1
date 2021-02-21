import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

export default class TableData extends Component {
  // gọi hàm đẩy dũ liệu ra bảng
  mappingDataUser = () => 
    this.props.DataUsersProps.map((value, key) => 
      <TableDataRow editFunClick={(user) => this.props.editFun(value)}  changeEditUserStatus={() => this.props.changeEditUserStatus()}
       key={key}
       stt={key}
       name={value.name} 
       tel={value.tel} 
       permission={value.permission + ""}>

       </TableDataRow>
   )
  
  render() {
    //console.log(this.props.DataUsersProps);
    return (
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {
              this.mappingDataUser()
            }
          </tbody>
        </table>
      
    )
  }
}
