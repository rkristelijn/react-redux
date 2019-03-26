import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";
import { debug } from "util";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course"); //assertion build in
});

it("should label save button as 'Save' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save"); //assertion build in
});

it("should label save button as 'Save' when not saving", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving..."); //assertion build in
});