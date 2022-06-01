import React, { Component } from 'react';
import axios from 'axios';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
        User: []
    };

  }


  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/users").then(res => {
      if (res.data.success) {
        this.setState({
            User: res.data.existingPosts
        });

        console.log(this.state.User);
      }


    });
  }


  onDelete = (id) => {

    axios.delete(`/User/delete/${id}`).then((res) => {
      alert("User Profile Deleted Successfully");
      this.retrievePosts();
    })
  }


  filterData(User, searchKey) {

    const result = User.filter((post) =>
      post.userCategory.toLowerCase().includes(searchKey)

    )

    this.setState({ User: result })

  }


  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get("/users").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });

  }

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
      <div className="hc">
        <br /> <br /> <br />
        <div style={{ width: '20%', marginLeft: '80%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search By User Category"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <div id="containerJoin">
            <center>
              <h1 className="gifJoin">All User Profiles</h1>

            </center>
          </div>
          
        <div >
          <br />

          <h3><span class="badge bg-info text-dark opacity-90 ">User Information</span></h3>
          <table class="table table-bordered " >
            <thead class="table-info">
              <tr>
                <th scope="col">#</th>
                <th scope="col">User ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">SLIIT Email</th>
                <th scope="col">NIC</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Date</th>
                <th scope="col">User Category</th>
                <th scope="col">Action</th>
                

              </tr>
            </thead>
            <tbody>
              {this.state.User.map((User, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">{index + 1}</th>
                  <td class="table-light">
                    <a href={`/User/${User._id}`} style={{ textDecoration: 'none' }}>
                      {User.regNo}
                    </a>
                  </td>

                  <td class="table-light">{User.name}</td>
                  <td class="table-light">{User.email}</td>
                  <td class="table-light">{User.nic}</td>
                  <td class="table-light">{User.pNo}</td>
                  <td class="table-light">{User.date}</td>
                  <td class="table-light">{User.userCategory}</td>
                  
                  
                  <td class="table-light">
                    <a className="btn btn-warning" href={`/EditUser/${User._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                   
                    <a className="btn btn-danger" href="#" onClick={() => window.confirm("Are You Sure You Want To Delete This User Profile ?") && this.onDelete(User._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>


                </tr>

              ))}

            </tbody>

          </table>


          {/* <div>
            <center>
              <a className="btn btn-warning text-dark " href="/createUserProfile" >
                <MDBIcon fas icon="user-plus" size='2x' />&nbsp;<b>Create a New User Profile</b>
              </a>
            </center>
          </div> */}

        </div>
        <br /><br />
        <br /><br />
      </div>
      </div>
    )
  };
};