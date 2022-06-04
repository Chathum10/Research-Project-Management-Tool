import React, { Component } from "react";
import axios from "axios";

export default class RegisterTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gid: "",
      area: "",
      name: "",
      description: "",
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

    const { gid, area, name, description } = this.state;

    const data = {
      gid: gid,
      area: area,
      name: name,
      description: description,
    };

    console.log(data);

    axios.post("/topic/save", data).then((res) => {
      let path = "/STopics";
      if (res.data.success) {
        alert("Topic Registered Successfully");
        this.props.history.push(path);
        this.setState({
          gid: "",
          area: "",
          name: "",
          description: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <br />
        <br />
        <h1 className="h3 mb-3 font-weight-normal">
          Your new discussion topic
        </h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Group ID</label>
            <input
              type="text"
              className="form-control"
              name="gid"
              placeholder=""
              value={this.state.gid}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Research Area</label>
            <select
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

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Sub Topic</label>
            <input
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
            <textarea
              type="text"
              className="form-control"
              name="description"
              placeholder=""
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            &nbsp; Post to forum
          </button>
        </form>
      </div>
    );
  }
}
