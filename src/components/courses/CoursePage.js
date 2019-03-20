import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

// Separation of concerns:
//   CoursePage should be a container component, it is now displaying and adding cources
class CoursePage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      alert("Loading courses failed" + error);
    });
  }
  render() {
    console.log("CoursePage", "render", this.state);
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("CoursePage", "mapStateToProps", state);
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  console.log("CoursePage", "mapDispatchToProps", courseActions);
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursePage);
