import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a5eead0b0578c1952da5e8ade79ecec0";

class App extends React.Component {
  // 1.

  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&appid=${API_KEY}&units=metric`
    );

    const data = await api_call.json(); //10.
    console.log(data);
  };

  render() {
    // 2.
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} /> 
        <Weather />
      </div>
    );
  }
}

export default App; // 3.

/* 1. initialise the component. The class is creating an instance of App and that instance is extending the component React.component that lives in node_modules.

 2. render method returns JSx. Babel behind the scenes converts it to readable JS for the browsernote: you can only return 1 parent element. Within one single <div></div> 
 
 3. export default the App so available for index.html
 
 4. Purpose is to have multiple files with UI code which is imported into a single file that is exported onto the main index.html, which is what displays in browser. 
  
 5. Create components and import them in App.js  insert in <div></div>

 6. Create account in API platform. Copy API Keys. Copy as a const API_KEY

 7. Create method getWeather and set to an arrow function. Not allowed prior React 16. Arrow functions allows you to use "this" keyword independently. No need to create a Constructor and within it bind your method:
 constructor () {
   this.getWeather = this.getWeather.bind(this)
 }
 8. Create a const called api_call, and then use a async/await (make http calls). before declare function put keyword async and then when you actually make the call write await with fetch api (newer method in JS) with URL you want to make the call to.

 9. Insert variables as template strings in URL

 10. Convert response to JSON format (JS object notation) converts data to readable language. Thanks to the fetch method it easy .json()

 11. How to make sure press the BUTTON in Form.js, the getWeather function in app.js gets called? Via props = HTML attributes.

 12. We are setting up a prop in <Form getWeather={this.getWeather} and setting its value to this function,this.getWeather

 13. in Form.js component file, adding a React attribute called onSubmit, which calls in this.props.getWeather 

 14. to prevent full page refresh. Add an argument called 'e' (event object in JS). prevent default behaviour of component when button clicked. 
 */
