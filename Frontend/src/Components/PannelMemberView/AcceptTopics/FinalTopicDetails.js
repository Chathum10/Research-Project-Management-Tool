import React, { Component } from "react";
import axios from "axios";

export default class FinalTopicDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    this.retrieveTopics();
  }

  retrieveTopics() {
    axios.get("/topics").then((res) => {
      if (res.data.success) {
        this.setState({
          topics: res.data.existingTopics,
        });

        console.log(this.state.topics);
      }
    });
  }

  filterData(topics, searchKey) {
    const result = topics.filter((topic) =>
      topic.gid.toLowerCase().includes(searchKey)
    );

    this.setState({ topics: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/topics").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingTopics, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="searh"
              placeholder="Search by Group ID"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Group ID</th>
              <th>Research Area</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Status</th>
              <th>Comments</th>
              <th>Supervisor's Name</th>
              <th>Co-Supervisor's Name</th>
              <th>Final feedback from Panel</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.topics.map((topics, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/topicRoutes/${topics._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {topics.gid}
                  </a>
                </td>
                <td>{topics.area}</td>
                <td>{topics.name}</td>
                <td>{topics.description}</td>
                <td>{topics.status}</td>
                <td>{topics.comment}</td>
                <td>{topics.sName}</td>
                <td>{topics.csName}</td>
                <td>{topics.feedback}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/Feedback/${topics._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Feedback
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
