function Header(props) {

  return (
    <header>
        <h1 className="title">{props.title}</h1>
        <button className={'change-theme-button ' + (props.darkTheme ? 'dark-theme-active' : '')} onClick={props.changeTheme}>
            <i className={'fa-moon ' + (props.darkTheme ? 'fas' : 'far')}/>
        </button>
    </header>
  );
}

Header.defaultProps = {
    title: "JJSrra.github.io",
    darkTheme: true,
    changeTheme: () => {}
}

export default Header;
