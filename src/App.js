import './App.css';
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div className="main">
    <header>
      <h1>Good <span className='morning-text'>Morning</span></h1>
      <h3>Start the day with a <span className='coffee-text'>COFFEE</span></h3>
    </header>
    <Shop></Shop>
    <h1>How does React Works?</h1>
    <p>React is JavaScript Library that is used for building fast and interactive user interfaces.React application has at least one component which we refer to as the root component this component represents the internal application and contains other child components and every react application is essentially a tree of components.Component is implemented as a Java Script class that has some state and a render method the state here is the data that what needs to be display when the component is rendered and the render method is responsible for describing what the UI should look like. The output of this render method is a react element which is a simple plain JavaScript object that maps to a Dom element. It's not a real Dom element it's just a plain JavaScript object that represents that Dom element in memory so react keeps a lightweight representation of the Dom in memory which were referred to as the virtual Dom unlike the browser or the real Dom. This virtual DOM is cheap to create when any changes occur to the state of a component a new react element will be generated.React will then compare this element and his children with the previous one it figures out what is changed usinG diff algorithm and then it will update a part of the real Dom to keep it in sync with the virtual Dom so that means when building applications with react unlike vanilla JavaScript or jQuery there is no longer have to work with the Dom API in browsers in other words we no longer have to write code and query and manipulate the Dom or attach the event handlers to Dom elements we simply change the state of our components and react will automatically update the Dom to match that state and that's exactly why this library is called react because when the state changes react essentially reacts to the state change and updates the dump. That is how react Works.</p>
    <h1>Props vs States</h1>
    <p>The difference between state and props is that state is handled in the component and it is updated inside the component while props are handled outside the component and must be updated outside of the component.when any changes occur in the state inside of the application it's going to re-render that section of the application but props can't actually change them , props is immutable.Props can be used in class and funtion components but states can be used only in class components. Props are read only but states changes can be asynchronous.</p>
    </div>
  );
}

export default App;
