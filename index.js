const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

/* ACTION */
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

/* ACTION CREATORS */
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}
function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

/* INITIAL STATE */
const initialState = {
  numOfCakes: 10,
};

/* REDUCERS */
// {previosState, action} => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

/* CREATE STORE */
const store = createStore(reducer);

/* getState for getting variables value */
console.log("Initial State ", store.getState());

/* subscribe and perform operations */
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

/* Dispatch actions */
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCake(3));
// store.dispatch(restockCake(2));
// store.dispatch(restockCake(1));

const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(2);
actions.restockCake(3);
actions.restockCake(1);

/* Unsubscribe to not use store anymore */
unsubscribe();
