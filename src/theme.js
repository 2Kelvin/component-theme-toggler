function App() {
    const [theme, setTheme] = React.useState(lightTheme);

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
    }

    return (
        <div className="page" style={theme ? lightTheme : darkTheme}>
            <img
                src="images/sunP.png"
                onClick={handleThemeChange}
                className="sun"
            />
        </div>
    );
}

function Moon({ handleThemeChange }) {
    <img
        src="images/moon.png"
        onClick={handleThemeChange}
        className="moon"
    />
}

function Sun({ handleThemeChange }) {
    <img
        src="images/sunP.png"
        onClick={handleThemeChange}
        className="sun"
    />
}

// react & react DOM stuff
const reactContainer = document.getElementById("root");
const root = ReactDOM.createRoot(reactContainer);
root.render(<App />);