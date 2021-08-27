   
    import React from "react";
    import PropTypes from "prop-types";

      function App(props){
        return (
          <React.Fragment>
              <h1>{props.message}</h1>
              <h1>Hello 2</h1>
          </React.Fragment>
        );
      }

      App.propTypes = {
        message:PropTypes.string
      }

      export default App;

 