import React, { Component } from 'react'
import EditUser from './EditUser';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempvalue: "",
      userObj: {}
    }
  }
  
    
  getUserEditInfo = (info) => {
    this.setState({
      userObj: info
    })
    
   //console.log(this.state.userObj);
//console.log(this.state.userObj)
  }
getUserEditUserApp = (info) => {
  this.setState({
    userObj: info
  })
  this.props.getUserEditUserApp(info);
}


  isShowEditForm = () =>{
    if(this.props.editUserStatus === true){
      return <EditUser
              getUserEditUserApp = {(info) => this.getUserEditUserApp(info)}
              getUserEditInfo = {(info) => this.getUserEditInfo()}
               userEditObject = {this.props.userEditObject}
               changeEditUserStatus={() => this.props.changeEditUserStatus()}
               >
                
               </EditUser>
    }
  }

  isChange = (event) => {
    console.log(event.target.value);
    this.setState({
      tempvalue: event.target.value
    })
    this.props.checkConnectProps(this.state.tempvalue)
  }
  hienThiNut = () => {
      if(this.props.hienThiForm === true){
        return  <div className="btn btn-block btn-outline-secondary" onClick={() => {this.props.ketNoi()}}>Đóng lại</div>
      }
      else{
        return(
        <div className="btn btn-block btn-outline-info" onClick={() => {this.props.ketNoi()}}>Thêm mới</div>)
      }
  }

  render() {
    return (
        <div className="searchForm">
        <div className="container">
        {this.isShowEditForm()}
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <div className="btn-group">
                  <input onChange={(event) => {this.isChange(event)}} style={{width: '417px'}} type="text" className="form-control" placeholder="Tìm kiếm thành viên"/>
                  <input onClick={(dl) => this.props.checkConnectProps(this.state.tempvalue)} type="button" className="btn btn-info" defaultValue="Tìm Kiếm" />
                </div>
              </div>
            </div>
            <div className = "col-9"></div>
            <div className="col-3">
                    {this.hienThiNut()}
                    
                </div>

            <div className="col-12">
              <hr className="my-2" />
            </div>
          </div>
        </div>
      </div>

    )
  }
}
