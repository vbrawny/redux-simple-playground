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

//console.log(store.getState());

//END subscription code that executes whenever the store gets updated,this we use in our components.
//like action selectors in ngrx
const subscriber = () => console.log("SUBSCRIBER", store.getState());

//The end function we map to store.
store.subscribe(subscriber);

//long notation - this we can make it shorthand using bindActionCreators
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(add(100));
//now you will be seeing console.logs twice with values.

//bindActionCreators - similar to compose, they replace store.dispatch.
const actions = bindActionCreators({ increment, add }, store.dispatch);
//quite equivalent to
// const [add,increment] = [add,increment].map(fn=>compose(store.dispatch,fn));
console.log(actions);
//now we can call them in the below way
actions.add(1000);
actions.increment();
console.log(store.getState());
//store.subscribe(subscriber);
