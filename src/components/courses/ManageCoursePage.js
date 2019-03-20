import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch(error => {
        alert("Loading courses failed: " + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed: " + error);
      });
    }
  }
  render() {
    const { courses } = this.props;
    console.log("ManageCoursePage", "render", this.props);
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log("ManageCoursePage", "mapStateToProps", state);
  return {
    courses: state.courses,
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  console.log(
    "ManageCoursePage",
    "mapDispatchToProps",
    courseActions,
    authorActions
  );
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
