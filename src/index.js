//redux apis
import {
  createStore,
  compose,
  //ActionCreator,
  applyMiddleware,
  bindActionCreators,
  combineReducers
} from "redux";

//---- in this we will learn about Enhancers also called Store Enhancers --//
const reducer = (state) => state;

//syntax - createStore(reducer,initialState,storeEnhancer)
const store = createStore(reducer, () => {});

//Enhancer - if we wanted to add additional functionality to a reducer, we do
//through a enhancer.

//enhancer will first allows whatever needs to be done with store then gets
//an instance of it then works on top of that store state and then do whatever
//is mentioned within it(within enhancer) then sends out the enhanced one.
//since it is working on top of existing reducer, we called it as an enhancer.

//best example is redux dev store.

//apply middleware is an enhancer.

//let say we wanted to monitor whatever is happening in the above redux store.

//enhancer = (its function with params reducer,initialState,enhancer) wrapped by
// another function createStore.
//as we already discussed enhancer works ontop of create store function result.
const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  return createStore(reducer, initialState, enhancer);
};
