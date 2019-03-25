import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import { toast } from "react-toastify";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history, //every React Component using <Route> gets history passed in natively
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    console.log("ManageCoursesPage", "useEffect");
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed: " + error);
      });
    } else {
      console.log(
        "ManageCoursesPage",
        "setCourse when props.course change",
        props.course
      );
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed: " + error);
      });
    }
  }, [props.course]);

  function formIsValid() {
    const { title, authorId, category } = course;
    const errors = {};
    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required.";
    if (!category) errors.category = "Category is required.";

    setErrors(errors);
    //Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("ManageCoursesPage", "handleChange", name, value);
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    console.log("ManageCoursesPage", "handleSave", course);
    event.preventDefault();

    if (!formIsValid()) {
      return;
    }

    setSaving(true);
    saveCourse(course)
      .then(() => {
        toast.success("Course saved.");
        history.push("/courses");
      })
      .catch(error => {
        console.log("ManageCoursesPage", "handleChange;error", error);
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getCourseBySlug(courses, slug) {
  return courses.find(course => course.slug === slug) || null;
}

function getSlug(ownProps) {
  return (ownProps.location.pathname || [])
    .split("/")
    .slice(-1)
    .pop();
}

function mapStateToProps(state, ownProps) {
  console.log("ManageCoursePage", "mapStateToProps", state, ownProps);
  const slug = getSlug(ownProps);
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
