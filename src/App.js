import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


/* 1. initialise the component. The class is creating an instance of App and that instance is extending the component React.component that lives in node_modules.

 2. render method returns JSx. Babel behind the scenes converts it to readable JS for the browsernote: you can only return 1 parent element. Within one single <div></div> 
 
 3. export default the App so available for index.html
 
 4. Purpose is to have multiple files with UI code which is imported into a single file that is exported onto the main index.html, which is what displays in browser. 
  */

class App extends React.Component { // 1.
 render() { // 2.
  return ( 
  <div>
  <Titles />
  <Form />
  <Weather />
  </div>

  );
};
};

export default App; // 3.