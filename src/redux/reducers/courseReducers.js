import * as types from "../actions/actionTypes";

// we pass courses as an array, you could also pass as an object, that is quicker
// const ourCourses = [
//    { id: 1, title: "Course 1" },
//    { id: 2, title: "Course 2" }
// ];
// const byIdCourses = {
//   1: { id: 1, title: "Course 1" },
//   2: { id: 2, title: "Course 2" }
// };
// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      console.log("courseReducer", action);
      // state.push(action.course) //!! not allowed to mutate the state.
      // - Instead return a copy of the state and the action
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      //if action is passed that this reducer doesn't know about, just pass along the state
      return state;
  }
}
