import React, { Component } from "react";
import axios from "axios";

export default class PanelDetailsList extends Component {
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
              </tr>
            </thead>

            <tbody>
              {this.state.panels.map((panels) => (
                <tr>
                  <td class="table-light">{panels.panelNo}</td>

                  <td class="table-light">{panels.pMember01}</td>
                  <td class="table-light">{panels.pMember02}</td>
                  <td class="table-light">{panels.pMember03}</td>
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
