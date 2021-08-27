   
    import React from "react";

      function Student(){

         const handleClick = (e) => {    
           e.preventDefault();
           alert("button clicked");
         }

             return (
               <div>
                 <h1>Handling Event</h1>
                  <a href="#" onClick={handleClick}>Click me </a>
              </div>
          );
         }
       
      export default Student;

 