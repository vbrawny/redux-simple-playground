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
//redux toolkit
//const incrementAction = { type: "counter/increment" };
// //what if i do a spelling mistake
// const incrementAction = { type: "INCREMENT" };

// //REDUCER
// const reducer = (state = initialState, action) => {
//   //what if i do a spelling mistake
//   if (action.type === "INCREMENT") {
//     return { state: state.valye + 1 };
//   }
// };
const INCREMENT = "INCREMENT";
const incrementAction = { type: INCREMENT };
//ACTION ActionCreator
const increment = () => ({ type: INCREMENT });

const ADD = "ADD";
const add = (amount) => ({ type: ADD, payload: amount });

//REDUCER

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state["value"] + 1 };
  }
  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
};

//STORE
//one option to pass initial state here
//const store = createStore(reducer, initialState);
const store = createStore(reducer);

store.dispatch(increment());
store.dispatch(increment());

console.log(store.getState());
