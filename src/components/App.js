import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

import Poll from "./Poll";
import AddPoll from "./AddPoll";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <Poll match={{ params: { id: "loxhs1bqm25b708cmbf3g" } }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null });
export default connect(mapStateToProps)(App);
