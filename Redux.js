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
});//// define the root reducer here

const store = Redux.createStore(rootReducer);

/* Challenge 11 */
/* Send Action Data to the Store */
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line
    case ADD_NOTE:
      return action.text;
      break;
    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

/* Challenge 12 */
/* Use Middleware to Handle Asynchronous Actions */
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here
    store.dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here
      store.dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

/* Challenge 13 */
/* Write a Counter with Redux */
const INCREMENT = 'INCREMENT'; // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

const defaultState = 0;

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
      break;
    case DECREMENT:
      return state - 1;
      break;
    default:
      return state;
  }
}; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type: INCREMENT
  }
}; // define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT
  } // define an action creator for decrementing
};

const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers

/* Challenge 14 */
/* Never Mutate State */
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      return todos.concat(action.todo);
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

/* Challenge 15 */
/* Use the Spread Operator on Arrays */
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // don't mutate state here or the tests will fail
      return [...state].concat(action.todo);
      break;
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

/* Challenge 16 */
/* Remove an Item from an Array */

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
