//redux apis
import {
  createStore,
  compose,
  //ActionCreator,
  applyMiddleware,
  bindActionCreators,
  combineReducers
} from "redux";

//INITIAL STATE
const initialState = {
  users: [
    { id: 1, name: "cristiano" },
    { id: 2, name: "neymaar" },
    { id: 3, name: "messi" }
  ],
  tasks: [
    { title: "file the tps reports" },
    { title: "order more energy drinks" }
  ]
};

//ACTIONS

// ACTIONS CONSTANTS

const ADD_USER = "ADD USER";
const ADD_TASK = "ADD TASK";

//action creator

const addUser = (user) => ({ type: ADD_USER, payload: user });
const addTask = (task) => ({ type: ADD_TASK, payload: task });

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_USER: {
//       return {
//         ...state,
//         users: [...state.users, action.payload]
//       };
//     }
//     case ADD_TASK: {
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload]
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// const store = createStore(reducer);

//now if you donot want to have in the above way, you can simply go by seggregating one reducer
//into multiple as shown below.

const userReducer = (users = initialState.users, action) => {
  console.log("--action--user--", action);
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }
  return users;
};
const taskReducer = (tasks = initialState.tasks, action) => {
  console.log("--action--task--", action);
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }
  return tasks;
};

//now we use combineReducers to combine both users and tasks.

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const store = createStore(reducer);

console.log(store.getState());
//we still have the same initial state structure even tough we have seggregated
//state object into two reducers.
//NOTE - although we seggregate the reducers, due to this combineReducers we will have every
//action flowing through every reducer, meaning when we call ADD_TASK action, it will hit
//both userReducer and taskReducer. Likewise
//when we call ADD_USER, it will hit userReducer and taskReducer.
//with this we can utlize the values of tasks inside users and viceversa.
//this was the main reason our final state has a combined result of both
//users and tasks. isn't it great... combineReducer => combineActions => combineState.

//so wherever you are in the application just call one action and update the state
//accordingly in any reducer whereever you want.
// products update and then it should reflect in cart reducer viceversa.
