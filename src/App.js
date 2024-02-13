import './App.css';
import sun from './components/sun.png'
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
       <div >
        <img src={sun} alt="pic" className="sun" />
      </div>
      <TodoWrapper  />
    </div>
  );
}

export default App;
