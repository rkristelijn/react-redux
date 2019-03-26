import courseReducer from "./courseReducers";
import * as actions from "../actions/courseActions";

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  const initialState = [{ title: "A" }, { title: "B" }];
  const newCourse = {
    title: "C"
  };

  const action = actions.createCourseSuccess(newCourse);
  const newState = courseReducer(initialState, action);

  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];
  const newCourse = { id: 2, title: "New Title" };

  const action = actions.updateCourseSuccess(newCourse);
  const newState = courseReducer(initialState, action);

  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("New Title");
  expect(newState[2].title).toEqual("C");
});
