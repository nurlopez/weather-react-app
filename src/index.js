import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // .js not needed if your wrote the App file
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// it telling the file to render App to this root element.
// it will disply in the div with id 'root' in index.html 


serviceWorker.unregister();
