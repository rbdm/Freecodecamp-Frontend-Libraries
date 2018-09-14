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
