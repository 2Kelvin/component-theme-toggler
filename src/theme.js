function App() {
    const [theme, setTheme] = React.useState(lightTheme);
    const [icon, setIcon] = React.useState(<Moon handleThemeChange={handleThemeChange} />);

    const lightTheme = {
        backgroundColor: "white",
        color: "black"
    };

    const darkTheme = {
        backgroundColor: "#0d1117",
        color: "white"
    };

    function handleThemeChange() {
        setTheme(!theme);
        setIcon(theme == lightTheme ? <Moon /> : <Sun />)
    }

    return (
        <div className="page" style={theme ? lightTheme : darkTheme}>
            {icon}
        </div>
    );
}

function Moon({ handleThemeChange }) {
    return (
        <img
            src="images/moon.png"
            onClick={handleThemeChange}
            className="moon"
        />
    );
}

function Sun({ handleThemeChange }) {
    return (
        <img
            src="images/sunP.png"
            onClick={handleThemeChange}
            className="sun"
        />
    );
}

// react & react DOM stuff
const reactContainer = document.getElementById("root");
const root = ReactDOM.createRoot(reactContainer);
root.render(<App />);