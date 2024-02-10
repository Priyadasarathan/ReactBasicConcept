// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Result from './Result';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import User from './components/User';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
const secretNum = Math.floor(Math.random() * 10) + 1;

function App() {
  const [term, setTerm] = useState("")
  const handlechange = (e) => {
    setTerm(e.target.value)
  }
  return (
    <div>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <div className='container'>
          <div className='head'>
            <label htmlFor='term'>Guess the number between 1 to 10 </label>

          </div>
          <input id="term" type='text' name='term' onChange={handlechange} />
        </div>
        <div>
          <Result secretNum={secretNum} term={term} />
        </div>
      </div>
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/user/1'>User 1</Link></li>
          <li><Link to='/user/2'>User 2</Link></li>
          <li><Link to='/user/3'>User 3</Link></li>
          {/* Nested route */}
          <li><Link to='/Books/OldBooks'>Old Books</Link></li>
          <li><Link to='/Books/NewBooks'>New Books</Link></li>
          <li><Link to='/Login'>Login</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />
          {/* nested routes */}
          <Route path='/Books'>
            <Route path='OldBooks' element={<OldBooks />} />
            <Route path='NewBooks' element={<NewBooks />} />
          </Route>
          <Route path='/Login' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;

