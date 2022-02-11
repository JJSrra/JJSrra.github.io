import { useState } from 'react';
import Card from '../Card/Card';

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
          <button className={'change-theme-button ' + (darkTheme ? 'dark-theme-active' : '')} onClick={changeTheme}><i className={'fa-moon ' + (darkTheme ? 'fas' : 'far')}/></button>
        </header>
        <div className="content">
          <div className="cards-container">
            <Card imageSource="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" cardText="First card"></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
