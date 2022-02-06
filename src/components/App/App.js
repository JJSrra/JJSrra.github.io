import { useState } from 'react';
import PaletteDisplay from '../PaletteDisplay/PaletteDisplay';

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={'theme ' + (darkTheme ? 'theme-dark' : 'theme-light')}>
      <div className="app">
        <header>
          <h1 className="title">JJSrra.github.io</h1>
          <button className="change-theme-button" onClick={changeTheme}><i className={'fa-moon ' + (darkTheme ? 'fas' : 'far')}/></button>
        </header>
        <PaletteDisplay></PaletteDisplay>
      </div>
    </div>
  );
}

export default App;
