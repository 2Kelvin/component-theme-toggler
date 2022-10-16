function App() {
    const [theme, setTheme] = React.useState(lightTheme);

    const lightTheme = {
        backgroundColor: "white",
        color: "black"
    };

    const darkTheme = {
        backgroundColor: "black",
        color: "white"
    };

    function handleThemeChange() {
        setTheme(!theme);
    }

    return (
        <div className="page" style={theme ? lightTheme : darkTheme}>
            <img
                src="images/moon.png"
                onClick={handleThemeChange}
                className="moon"
            />
        </div>
    );
}

// react & react DOM stuff
const reactContainer = document.getElementById("root");
const root = ReactDOM.createRoot(reactContainer);
root.render(<App />);