var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
    var _React$useState = React.useState(lightTheme),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        theme = _React$useState2[0],
        setTheme = _React$useState2[1];

    var lightTheme = {
        backgroundColor: "white",
        color: "black"
    };

    var darkTheme = {
        backgroundColor: "black",
        color: "white"
    };
}

var reactContainer = document.getElementById("root");
var root = ReactDOM.createRoot(reactContainer);
root.render(React.createElement(App, null));