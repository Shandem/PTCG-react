
import { Link } from 'react-router-dom';

import Routes from './config/Routes.js'

import './App.css';

function App() {
  return (
    <div className="App">
      {Routes}
      hi
      <br/>
        <div className='ball'>
            <div className='top-Half'/>
            <div className='middle'><Link className='center' to='/gamebord'>test</Link> </div>
            <div className='bottom-Half'/>
        </div>
      hola
    </div>
  );
}

export default App;
