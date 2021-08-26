  
    import React, { Component } from "react";
    import Student from "./Student";
  
     class App extends Component{
       render(){
        return (
          <React.Fragment>
              <Student name = "Ram" />
              <Student name = "Shyam" />
              <Student name = "Balram" />
          </React.Fragment>
        );
       }
       
     }
   
    export default App;
