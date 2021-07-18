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

//REDUCER
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { state: state.valye + 1 };
  }
};

//STORE
const store = createStore();

console.log(store);
