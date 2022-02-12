import { useState } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PaletteDisplay from '../PaletteDisplay/PaletteDisplay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [darkTheme, setDarkTheme] = useState(window.localStorage.getItem("darkTheme") === "true");

  const changeTheme = () => {
    window.localStorage.setItem("darkTheme", !darkTheme);
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={'theme ' + (darkTheme ? 'theme-dark' : 'theme-light')}>
      <div className="app">
        <Header darkTheme={darkTheme} changeTheme={changeTheme} />
        <div className="content">
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/palette-display" element={<PaletteDisplay/>}/>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
