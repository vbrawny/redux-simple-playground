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
  //console.log("--action--user--", action);
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }
  return users;
};
const taskReducer = (tasks = initialState.tasks, action) => {
  //console.log("--action--task--", action);
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }
  return tasks;
};

//now we use combineReducers to combine both users and tasks.

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

//segement, datadog

const logMiddleware = (store) => (next) => (action) => {
  console.log("old state", store.getState(), action);
  //here we can have http
  next(action);
  console.log("new state", store.getState(), action);
};

const monitorMiddleware = (store) => (next) => (action) => {
  /*
  middleware gives us a place to inspect the flow of the actions
  we can modify the actions,change or replace them and dispatch new actions
  if we didnot call next to action based on some kind of conditional, 
  it would never make it to rest of the middleware or the reducer.
  
  sometimes this is what we want like useEffect case in ngrx- calling http and taking that result to 
  dispatch new action.

  we rely on someone dispatch a function,we donot want to make it all the way to reducer
  we wanna go make that AJAX request, do whatever, wait for the promise to resolve 
  get that result and then turn that into the action that goes to rest of the chain
  """""-----Middle ware is the place to do that---------------"""""""
  """""---------use effect scenario ---------------- from ngrx ---------------"""""
  
  */
  const start = performance.now();
  //next(action);
  //commenting this out will not update the state - store.dispatch(addUser({ id: 4, name: "venky" }));
  //so next(action) is always necessary to move further.
  next(action);
  const end = performance.now();
  const diff = end - start;
  console.log("--diff--", diff);
};

//best example for applyMiddleware - http - reduxthunk
const store = createStore(
  reducer,
  applyMiddleware(logMiddleware, monitorMiddleware)
);
store.dispatch(addUser({ id: 4, name: "venky" }));
console.log(store.getState());
