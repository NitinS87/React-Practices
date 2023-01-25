const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

/* ACTION */
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}
function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

/* INITIAL STATE */
const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
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
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
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

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(2);
actions.restockCake(3);
actions.restockCake(1);

actions.orderIceCream(5);
actions.orderIceCream(3);
actions.orderIceCream();

actions.restockIceCream(2);
actions.restockIceCream(3);
actions.restockIceCream(5);

/* Unsubscribe to not use store anymore */
unsubscribe();
