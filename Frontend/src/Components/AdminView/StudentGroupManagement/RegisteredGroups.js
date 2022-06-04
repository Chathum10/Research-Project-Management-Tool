import React, { Component } from "react";
import axios from "axios";

export default class RegisteredGroups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.retrieveGroups();
  }

  retrieveGroups() {
    axios.get("/groups").then((res) => {
      if (res.data.success) {
        this.setState({
          groups: res.data.existingGroups,
        });

        console.log(this.state.groups);
      }
    });
  }

  filterData(groups, searchKey) {
    const result = groups.filter((group) =>
      group.l_id.toLowerCase().includes(searchKey)
    );

    this.setState({ groups: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/groups").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingGroups, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
        <br />
        <div style={{ width: "20%", marginLeft: "80%" }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search By Group leader's ID"
              aria-label="Search"
              onChange={this.handleSearchArea}
            ></input>
          </form>
        </div>
        <div id="containerJoin">
          <center>
            <h1 className="gifJoin">All Research groups </h1>
          </center>
        </div>

        <div>
          <br />

          <table class="table table-bordered ">
            <thead class="table-info">
              <tr>
                <th scope="col">Leader's ID</th>

                <th scope="col">Member O1</th>
                <th scope="col">Member O2</th>
                <th scope="col">Member O3</th>
                <th scope="col">Member O4</th>
                <th scope="col">Group ID</th>
                <th scope="col">Panel No.</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.groups.map((groups) => (
                <tr>
                  <td class="table-light">{groups.l_id}</td>

                  <td class="table-light">{groups.member01}</td>
                  <td class="table-light">{groups.member02}</td>
                  <td class="table-light">{groups.member03}</td>
                  <td class="table-light">{groups.member04}</td>
                  <td class="table-light">{groups.g_id}</td>
                  <td class="table-light">{groups.panel}</td>
                  <td>
                    <a
                      className="btn btn-warning"
                      href={`/AssignPanel/${groups._id}`}
                    >
                      <i className="fas fa-edit"></i>&nbsp;Assign a pannel
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
