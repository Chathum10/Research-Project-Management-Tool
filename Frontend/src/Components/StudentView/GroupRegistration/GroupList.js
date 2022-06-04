import React, { Component } from "react";
import axios from "axios";

export default class GroupList extends Component {
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
            <thead>
              <tr>
                <th>Leader's ID</th>

                <th>Member O1</th>
                <th>Member O2</th>
                <th>Member O3</th>
                <th>Member O4</th>
                <th>Group ID</th>
                <th>Panel No.</th>
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
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <br></br>

          <center>
            <a className="btn btn-warning text-dark " href="/GroupRegister">
              &nbsp;<b>Register Your group</b>
            </a>
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
