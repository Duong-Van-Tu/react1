import React, { Component } from 'react'

export default class AddUsers extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      id: "",
      name: "",
      tel:"",
      permission: ""
    })
  }
  
  isChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
     console.log(value);
    console.log(value);
    this.setState({
      [name]: value
    })
   
    var item = {};
      item.id = this.state.id;
      item.name = this.state.name;
      item.tel = this.state.tel;
      item.permission = this.state.permission;
    
    console.log(typeof(item.permission));
  }
  kiemTraTrangThai = () => {
    if(this.props.hienThiForm === true){
      return(
        <div className="card text-left">
          <form>
        <div className="card border-primary mb-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="card-header">
                Thêm mới User
              </div>
              <div className="form-group">
                <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="form-group">
                <input type="text" name ="tel" onChange={(event) => this.isChange(event)} className="form-control" placeholder="PhoneNumber" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="form-group">
                <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)} required>
                  <option>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <button type="reset" className="btn btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)}>Thêm mới</button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
      )
    }
    else{

    }
  }
  render() {
    return (
<div>
      {this.kiemTraTrangThai()}
</div>
    )
  }
}
