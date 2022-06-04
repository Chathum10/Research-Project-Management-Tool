import React, { Component } from "react";
import axios from "axios";
import '../../Background/background.css';

export default class PanelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: [],
    };
  }

  componentDidMount() {
    this.retrievePanels();
  }

  retrievePanels() {
    axios.get("/panels").then((res) => {
      if (res.data.success) {
        this.setState({
          panels: res.data.existingPanels,
        });

        console.log(this.state.panels);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/panel/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePanels();
    });
  };

  filterData(panels, searchKey) {
    const result = panels.filter(
      (panel) =>
        panel.panelNo.toLowerCase().includes(searchKey) |
        panel.pMember01.toLowerCase().includes(searchKey) |
        panel.pMember02.toLowerCase().includes(searchKey) |
        panel.pMember03.toLowerCase().includes(searchKey)
    );

    this.setState({ panels: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/panels").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPanels, searchKey);
      }
    });
  };

  render() {
    return (
      <div class="dashboard">
      <div className="back fixed" style={{ zIndex: 8 }}>
        <br />
        <div style={{ width: "20%", marginLeft: "80%" }}>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search By Panel No. OR Member's Name"
              aria-label="Search"
              onChange={this.handleSearchArea}
            ></input>
          </form>
        </div>
        <div id="containerJoin">
          <center>
            <h1 className="gifJoin">All Panels </h1>
          </center>
        </div>

        <div>
          <br />

          <table class="table table-bordered ">
            <thead>
              <tr>
                <th scope="col">Panel No.</th>

                <th scope="col">Member O1</th>
                <th scope="col">Member O2</th>
                <th scope="col">Member O3</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.panels.map((panels) => (
                <tr>
                  <td class="table-light">{panels.panelNo}</td>

                  <td class="table-light">{panels.pMember01}</td>
                  <td class="table-light">{panels.pMember02}</td>
                  <td class="table-light">{panels.pMember03}</td>
                  <td>
                    <a
                      className="btn btn-warning"
                      href={`/EditPanelList/${panels._id}`}
                    >
                      &nbsp;Edit
                    </a>
                    &nbsp;
                    <a href="#" onClick={() => this.onDelete(panels._id)}>
                      &nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
          <br></br>

          <center>
            <a className="btn btn-warning text-dark " href="/CreatePanel">
              &nbsp;<b>Create a New panel</b>
            </a>
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      </div>
    );
  }
}
