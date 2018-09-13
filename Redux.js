/* Challenge 1 */
/* Create a Redux Store */
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the stor here:
let store = Redux.createStore(reducer);

/* Challenge 2 */
/* Get State from the Redux Store */
const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line
let currentState = store.getState();
console.log(currentState);

/* Challenge 3 */
/* Define a Redux Action */
let action = {
  type: 'LOGIN'
}

/* Challenge 4 */
/* Define an Action Creator */
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
    return action
}

/* Challenge 5 */
/* Dispatch an Action Event */
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());

/* Challenge 6 */
/*  */


/* Challenge 7 */
/*  */


/* Challenge 8 */
/*  */


/* Challenge 9 */
/*  */


/* Challenge 10 */
/*  */


/* Challenge 11 */
/*  */


/* Challenge 12 */
/*  */


/* Challenge 13 */
/*  */


/* Challenge 14 */
/*  */


/* Challenge 15 */
/*  */


/* Challenge 16 */
/*  */


/* Challenge 17 */
/*  */


/* Challenge 18 */
/*  */


/* Challenge 19 */
/*  */


/* Challenge 20 */
/*  */


/* Challenge 21 */
/*  */
