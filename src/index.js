//redux apis
import {
  createStore,
  compose,
  //ActionCreator,
  applyMiddleware,
  bindActionCreators
} from "redux";

//INITIAL STATE
const initialState = { value: 0 };

//ACTION - flux standard actions
const incrmentAction = { type: "INCREMENT" };

//REDUCER
const reducer = (state = initialState, action) => state;

//STORE
const store = createStore();

console.log(store);
