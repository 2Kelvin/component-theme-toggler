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


}






const reactContainer = document.getElementById("root");
const root = ReactDOM.createRoot(reactContainer);
root.render(<App />);