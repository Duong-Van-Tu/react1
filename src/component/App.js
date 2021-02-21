import './../css/App.css'
import AddUsers from './AddUers';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUsers from './Data.json';
import React, { Component } from 'react'

const { v4: uuidv4 } = require('uuid');
export default class App extends Component {
 constructor(props) {
   super(props);
   this.state= ({
     hienThiForm: true,
     data: DataUsers,
     searchText: '',
     editUserStatus: false,
    userEditObject: {}
   })
 }

getUserEditUserApp = (info) => {
  //info = this.state.data;
  this.setState({
    userEditObject: info
  })
  console.log("Thay doi noi dung da sua xong: " + info.name);
}

changeEditUserStatus = () =>{
  this.setState({
    editUserStatus: !this.state.editUserStatus
  })
}

 doiTrangThai = () => {
   this.setState({
    hienThiForm: !this.state.hienThiForm
   }) 
 }
 getTextSearch = (dl) => { 
  this.setState({
    searchText: dl
  })
  //console.log(this.state.searchText)
 }

 editUser = (user) => {
  // console.log(user)
   this.setState({
     userEditObject: user
   })
   console.log("Ket nối thành công!")
 }

 getNewUserData = (name, tel, permission) => {
   var item = {};
   item.id=uuidv4();
   item.name= name;
   item.tel = tel;
   item.permission = permission;

   var items = this.state.data;
   items.push(item);
   this.setState({
     data: items
   })
  console.log(this.state.data);
  console.log("ket noi thanh cong");
 }

  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.toUpperCase().indexOf(this.state.searchText.toUpperCase()) !== -1){
        return  ketqua.push(item);
      }
    })
  //  console.log(ketqua);
    return (
      <div className="App">
      <Header></Header>
      <Search ketNoi = {() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm}
         checkConnectProps={(dl) => {this.getTextSearch(dl)}}
         editUserStatus={this.state.editUserStatus}
        userEditObject={this.state.userEditObject}
         changeEditUserStatus={() => this.changeEditUserStatus()}
         getUserEditUserApp ={(info) => this.getUserEditUserApp(info)}
      ></Search>
          <div className="container">
            <div className="row">
                <div className="col-9">
                <TableData  changeEditUserStatus={() => this.changeEditUserStatus()} editFun={(user) => this.editUser(user)} DataUsersProps = {ketqua}></TableData>
                </div>
                <div className="col-3">
                <AddUsers add={(name, tel, permission)=> {this.getNewUserData(name, tel, permission)}} hienThiForm = {this.state.hienThiForm}></AddUsers>
                </div> 
            </div>
          </div>
    </div>
    )
  }
}
