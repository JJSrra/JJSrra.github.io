import { useEffect, useState } from "react";

function Header(props) {
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <header className={(scrolled ? "scrolled" : "")}>
        <h1 className="title">{props.title}</h1>
        <button className={"change-theme-button " + (props.darkTheme ? "dark-theme-active" : "")} onClick={props.changeTheme}>
            <i className={"fa-moon " + (props.darkTheme ? "fas" : "far")}/>
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
