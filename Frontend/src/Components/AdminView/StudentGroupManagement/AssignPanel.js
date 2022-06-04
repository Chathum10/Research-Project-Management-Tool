import React, { Component } from "react";
import axios from "axios";

export default class AssignPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      l_id: "",
      g_id: "",

      member01: "",
      member02: "",
      member03: "",
      member04: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  generateKey = (e) => {
    e.preventDefault();

    this.setState({
      g_id: "2022_Feb_" + this.state.member01 + "_",
    });
  };
  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const { l_id, g_id, panel, member01, member02, member03, member04 } =
      this.state;

    const data = {
      l_id: l_id,
      g_id: g_id,
      panel: panel,
      member01: member01,
      member02: member02,
      member03: member03,
      member04: member04,
    };

    console.log(data);

    axios.put(`/group/update/${id}`, data).then((res) => {
      let path = "/RegisteredGroups";
      if (res.data.success) {
        alert("A panel was assigned Successfully");
        this.props.history.push(path);
        this.setState({
          l_id: "",
          g_id: "",
          panel: "",
          member01: "",
          member02: "",
          member03: "",
          member04: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/group/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          l_id: res.data.group.l_id,
          g_id: res.data.group.g_id,
          panel: res.data.group.panel,
          member01: res.data.group.member01,
          member02: res.data.group.member02,
          member03: res.data.group.member03,
          member04: res.data.group.member04,
        });

        console.log(this.state.team);
      }
    });
  }

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
        <div className="col-md-8 mt-4 mx-auto">
          <br /> <br />
          <center>
            <h1>
              <span>Assign Panel Members</span>
            </h1>
          </center>
          <center>
            <br />
            <div className="col-md-8 mt-4 mx-auto">
              <br />
              <form className="needs-validation" noValidate>
                <h3>Team Details</h3>
                <br />
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Assign A Group ID</b>
                  </label>
                  <br />
                  <button
                    className="btn btn-dark"
                    type="submit"
                    style={{ marginTop: "15px" }}
                    onClick={this.generateKey}
                  >
                    <i className="far far-check-square"></i>
                    &nbsp; Generate Group ID
                  </button>
                  <br />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="g_id"
                    placeholder="EX:2022_Feb_IT20135966"
                    value={this.state.g_id}
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <br />
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Assign Panel</b>
                  </label>
                  <select
                    name="panel"
                    value={this.state.panel}
                    onChange={this.handleInputChange}
                    className="form-control"
                  >
                    <option defaultValue>--Select a Panel--</option>
                    <option value="Panel 01">Panel 01</option>
                    <option value="Panel 02">Panel 02</option>
                    <option value="Panel 03">Panel 03</option>
                    <option value="Panel 04">Panel 04</option>
                    <option value="Panel 05">Panel 05</option>
                  </select>
                </div>
                <br />
                <br />
                <h4 style={{ color: "#0000FF" }}>Member Details</h4>
                <br />
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Member 01</b>
                  </label>
                  <textarea
                    disabled
                    class="form-control"
                    id="textAreaExample"
                    rows="3"
                    name="member01"
                    placeholder="User ID   |   Consultant's Name   |"
                    value={this.state.member01}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Member 02</b>
                  </label>
                  <textarea
                    disabled
                    class="form-control"
                    id="textAreaExample"
                    rows="3"
                    name="member02"
                    placeholder="User ID   |   Consultant's Name   |"
                    value={this.state.member02}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Member 03</b>
                  </label>
                  <textarea
                    disabled
                    class="form-control"
                    id="textAreaExample"
                    rows="3"
                    name="member03"
                    placeholder="User ID   |   Consultant's Name   |"
                    value={this.state.member03}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Member 04</b>
                  </label>
                  <textarea
                    disabled
                    class="form-control"
                    id="textAreaExample"
                    rows="3"
                    name="member04"
                    placeholder="User ID   |   Consultant's Name   |"
                    value={this.state.member04}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  &nbsp; Assign
                </button>
                <br /> <br /> <br />
              </form>
            </div>
          </center>
        </div>
      </div>
    );
  }
}