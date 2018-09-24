/* Challenge 1 */
/* Getting Started with React Redux */
class DisplayMessages extends React.Component {
  // change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // change code above this line
  render() {
    return <div />
  }
};

/* Challenge 2 */
/* Manage State Locally First */
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    // bind first in the constructor..
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  submitMessage(event) {
    event.preventDefault(); // to prevent refresh & open in new tab
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat(this.state.input),
        input: ''
      }
    })
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input value={this.state.input} onChange = {this.handleChange} />
        <button onClick = {this.submitMessage} >submit</button>
        <ul>
         {this.state.messages.map( (message, idx) = > {
          return (
           <li key ="idx">{message}</li>
          )
         })}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};

/* Challenge 3 */
/* Extract State Logic to Redux */
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
}

const defaultState = [];

const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return [...state].concat(action.message);
      break;
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer);

/* Challenge 4 */
/* Use Provider to Connect Redux to React */
// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const defaultState = [];

const messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React Code:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    )
  }
  // change code above this line
};

/* Challenge 5 */
/* Map State to Props */
const state = [];

// change code below this line
const mapStateToProps = (state) => {
  return {
    messages: state
  }
}

/* Challenge 6 */
/* Map Dispatch to Props */
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
}

/* Challenge 7 */
/* Connect Redux to React */
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// change code below this line
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational)


/* Challenge 8 */
/*  */


/* Challenge 9 */
/*  */


/* Challenge 10 */
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


/* Challenge 1 */
/*  */
