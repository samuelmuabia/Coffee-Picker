import logo from './logo.svg';
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
    </div>
  );
}

export default App;
