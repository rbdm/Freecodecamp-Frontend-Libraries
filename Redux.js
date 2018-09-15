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
/* Handle an Action in the Store */
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type == 'LOGIN') {
    return {
      login: true
    }
  } else {
    return state
  }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

/* Challenge 7 */
/* Use a Switch Statement to Handle Multiple Actions */
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {
        authenticated: true
      };
      break;
    case 'LOGOUT':
      return {
        authenticated: false
      };
      break;
    default:
      return state;
  }
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

/* Challenge 8 */
/* Use const for Action Types */
// change code below this line
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

/* Challenge 9 */
/* Register a Store Listener */
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line
store.subscribe(() => (count = count + 1));
//or store.subscribe(function countUp() {(count = count + 1)});
// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

/* Challenge 10 */
/* Combine Multiple Reducers */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});// define the root reducer here

const store = Redux.createStore(rootReducer);

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
