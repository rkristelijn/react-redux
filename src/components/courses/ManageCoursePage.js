import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursesPage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  course: initialCourse
}) {
  const [course, setCourse] = useState({ initialCourse });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    console.log("useEffect");
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed: " + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed: " + error);
      });
    }
  }, []); // The empty array as a second argument to effect means the effect will run only when it is not []

  return <CourseForm course={course} errors={errors} authors={authors} />;
}

ManageCoursesPage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  console.log("ManageCoursePage", "mapStateToProps", state);
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursesPage);
