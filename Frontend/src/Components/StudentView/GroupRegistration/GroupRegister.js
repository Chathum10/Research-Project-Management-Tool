import React, { Component } from "react";
import axios from "axios";

export default class GroupRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      l_id: "",
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

  onSubmit = (e) => {
    e.preventDefault();

    const { l_id, member01, member02, member03, member04 } = this.state;

    const data = {
      l_id: l_id,
      member01: member01,
      member02: member02,
      member03: member03,
      member04: member04,
    };

    axios.post("/group/save", data).then((res) => {
      let path = "/GroupList";
      if (res.data.success) {
        alert("Created the Group Successfully");
        this.props.history.push(path);
        this.setState({
          l_id: "",
          member01: "",
          member02: "",
          member03: "",
          member04: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="back fixed" style={{ zIndex: 8 }}>
        <div className="col-md-8 mt-4 mx-auto">
          <br /> <br />
          <center>
            <h1>
              <span>Create a group</span>
            </h1>
          </center>
          <center>
            <br />
            <div className="col-md-8 mt-4 mx-auto">
              <br />
              <form className="needs-validation" noValidate>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Group leader's ID</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="l_id"
                    placeholder="Reg No."
                    value={this.state.l_id}
                    onChange={this.handleInputChange}
                  />
                </div>
                <br />
                <h4>Member Details</h4>
                <br />
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Member 01</b>
                  </label>
                  <textarea
                    class="form-control"
                    id="textAreaExample"
                    rows="3"
                    name="member01"
                    placeholder="Group Leader's Reg.No   |   Member's Name   |"
                    value={this.state.member01}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Member 02</b>
                  </label>
                  <textarea
                    class="form-control"
                    id="textAreaExample"
                    rows="3"
                    name="member02"
                    placeholder="Reg.No   |   Member's Name   |"
                    value={this.state.member02}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Member 03</b>
                  </label>
                  <textarea
                    class="form-control"
                    id="textAreaExample"
                    rows="3"
                    name="member03"
                    placeholder="Reg.No   |   Member's Name   |"
                    value={this.state.member03}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>
                    <b>Member 04</b>
                  </label>
                  <textarea
                    class="form-control"
                    id="textAreaExample"
                    rows="3"
                    name="member04"
                    placeholder="Reg.No   |   Member's Name   |"
                    value={this.state.member04}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  &nbsp; Register this group
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
