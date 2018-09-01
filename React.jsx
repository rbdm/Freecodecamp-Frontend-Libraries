/* Challenge 1 */
const JSX = ( <h1>Hello JSX!</h1> );

/* Challenge 2 */
const JSX = (
  <div>
    <h1>H1</h1>
    <p>p</p>
    <ul>
      <li>li 1</li>
      <li>li 2</li>
      <li>li 3</li>
    </ul>
  </div>
);

/* Challenge 3 */
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* Here's a comment */}
  </div>
);

/* Challenge 4 */
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));

/* Challenge 5 */
const JSX = (
  <div className = 'myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

/* Challenge 6 */
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

/* Challenge 7 */
const MyComponent = function() {
  // change code below this line
  return (
    <div>some string of text</div>
  );
  // change code above this line
};

/* Challenge 8 */
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
};

/* Challenge 9 */
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
          <ChildComponent />
      </div>
    );
  }
};

/* Challenge 10 */
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};

/* Challenge 11 */
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }

/* Challenge 12 */
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));

/* Challenge 13 */
// change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));

/* Challenge 14 */
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};

/* Challenge 15 */
const List= (props) => {
  { /* change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks={['react FCC', 'nelpon dhika']} />
        <h2>Tomorrow</h2>
        <List tasks={['react FCC', 'monster hunter world', 'dateng ke nikahan tito']} />
        { /* change code above this line */ }
      </div>
    );
  }
};

/* Challenge 16 */


/* Challenge 17 */


/* Challenge 18 */


/* Challenge 19 */


/* Challenge 20 */


/* Challenge 21 */


/* Challenge 22 */


/* Challenge 23 */


/* Challenge 24 */


/* Challenge 25 */
