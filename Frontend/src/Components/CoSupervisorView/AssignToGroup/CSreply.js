import React, { Component } from "react";
import axios from "axios";

export default class CSreply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: "",
      area: "",
      name: "",
      description: "",
      status: "",
      comment: "",
      sName: "",
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
    const id = this.props.match.params.id;

    const { gid, area, name, description, status, comment, sName, csName } =
      this.state;

    const data = {
      gid: gid,
      area: area,
      name: name,
      description: description,
      status: status,
      comment: comment,
      sName: sName,
      csName: csName,
    };

    console.log(data);

    axios.put(`/topic/update/${id}`, data).then((res) => {
      let path = "/CSviewTopics";
      if (res.data.success) {
        alert("Successfully Assigned");
        this.props.history.push(path);
        this.setState({
          gid: "",
          area: "",
          name: "",
          description: "",
          status: "",
          comment: "",
          sName: "",
          csName: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/topic/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          gid: res.data.topic.gid,
          area: res.data.topic.area,
          name: res.data.topic.name,
          description: res.data.topic.description,
          status: res.data.topic.status,
          comment: res.data.topic.comment,
          sName: res.data.topic.sName,
          csName: res.data.topic.csName,
        });

        console.log(this.state.topic);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <br /> <br /> <br />
        <h1>Assign Co-Supervisors</h1>
        <br />
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Group ID</label>
            <input
              disabled
              type="text"
              className="form-control"
              name="gid"
              placeholder=""
              value={this.state.gid}
              onChange={this.handleInputChange}
            />

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Research Area</label>
              <select
                disabled
                name="area"
                value={this.state.area}
                onChange={this.handleInputChange}
                className="form-control"
              >
                <option defaultValue>--Select Your Research Area--</option>
                <option value="Cloud computing">Cloud computing</option>
                <option value="Distributed system">Distributed system</option>
                <option value="Green computing "> Green computing</option>
                <option value="Data Warehousing "> Data Warehousing</option>
                <option value="Artificial Intelligence ">
                  {" "}
                  Artificial Intelligence
                </option>
                <option value="Internet of Things ">Internet of Things </option>
                <option value="Machine learning ">Machine learning </option>
                <option value="Human Computer Interaction  ">
                  {" "}
                  Human Computer Interaction{" "}
                </option>
                <option value="Data mining semantic-web-mining ">
                  Data mining semantic-web-mining{" "}
                </option>
                <option value="Software fault localization ">
                  Software fault localization{" "}
                </option>
              </select>
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Sub Topic</label>
            <input
              disabled
              type="text"
              className="form-control"
              name="name"
              placeholder=""
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Brief Description</label>
            <input
              disabled
              type="text"
              className="form-control"
              name="description"
              placeholder=""
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Status</label>
            <input
              disabled
              type="text"
              className="form-control"
              name="status"
              placeholder=""
              value={this.state.status}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Supervisor's Name</label>
            <input
              disabled
              type="text"
              className="form-control"
              name="sName"
              placeholder=""
              value={this.state.sName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Co-Supervisor's Name</label>
            <input
              type="text"
              className="form-control"
              name="csName"
              placeholder=""
              value={this.state.csName}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
           
           Assign
          </button>
          <br /> <br />
        </form>
      </div>
    );
  }
}
