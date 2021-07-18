//redux apis
import {
  createStore,
  compose,
  //ActionCreator,
  applyMiddleware,
  bindActionCreators
} from "redux";

const makeLouder = (string) => string.toUpperCase();

const repeatThreeTimes = (string) => string.repeat(3);

const bolden = (string) => string.bold();

// const makeLouderRepeatThreeTimesAndEmbolden = (string) =>
//   bolden(repeatThreeTimes(makeLouder(string)));

const makeLouderRepeatThreeTimesAndEmbolden = compose(
  bolden,
  repeatThreeTimes,
  makeLouder
);

console.log(makeLouderRepeatThreeTimesAndEmbolden("hello"));
