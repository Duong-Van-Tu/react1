import React, { Component } from 'react'

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      permission: this.props.userEditObject.permission,
    })
  }
  saveButton = () => {
    var info = {}
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;
   this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
    this.props.getUserEditUserApp(info);
   console.log(info)
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
   // console.log(this.state)
    return (
        <div className="row">
        <div className="col-12">
                <div className="card text-left">
              <form>
            <div className="card border-primary mb-3">
              <div className="card text-center text-warning bg-sencondary">
                <div className="card-body">
                  <div className="card-header">
                    Sửa thông tin user trong hệ thống
                  </div>
                  <div className="form-group">
                    <input type="text" onChange={(event) => this.isChange(event)} name="name" defaultValue={this.props.userEditObject.name} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <div className="form-group">
                    <input type="text" onChange={(event) => this.isChange(event)} name ="tel" defaultValue={this.props.userEditObject.tel} className="form-control" placeholder="PhoneNumber" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <div className="form-group">
                    <select className="custom-select" onChange={(event) => this.isChange(event)} name="permission" defaultValue={this.props.userEditObject.permission}  required>
                      <option>Chọn quyền mặc định</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button type="reset" className="btn btn-danger" onClick={() => this.saveButton()}>Lưu</button>
                  </div>
                </div>
              </div>
            </div>
            
            </form>
          </div>
        </div>
      </div>
    )
  }
}
