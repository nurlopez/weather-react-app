import React from "react";

/* 1. initialise the component. The class is creating an instance of App and that instance is extending the component React.component that lives in node_modules.

 2. render method returns JSx. Babel behind the scenes converts it to readable JS for the browsernote: you can only return 1 parent element. Within one single <div></div> 
 
 3. export default the App so available for index.html
 */

 
class App extends React.Component { // 1.
 render() { // 2.
  return ( 
  <div>
  <p> Hello </p>
  <h1>Yo!</h1> 
  </div>

  );
}
};

export default App; // 3.