import './App.css';
import Mainpage from './Components/Mainpage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Mainpage></Mainpage>
      </BrowserRouter>
    </div>
  );
}

export default App;
