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
