import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  console.log("courseReducer", action);
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      // just add the course to the courses
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      // update the course in courses
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      // return the courses, without the course action
      return state.filter(course => course.id !== action.course.id);
    default:
      // if we come here, don't touch the state, return it unchanged
      return state;
  }
}
