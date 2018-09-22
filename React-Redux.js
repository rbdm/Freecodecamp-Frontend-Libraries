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
           <li key ="idx">{this.state.messages}</li>
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


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */


/* Challenge  */
/*  */
