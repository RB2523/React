   
    import React from "react";

      function Student(){

        //  function handleClick(){      // 1
        //   alert("button clicked 1");
        // }

         const handleClick = () => {    //2
           alert("button clicked 2");
         }

             return (
               <div>
                 <h1>Handling Event</h1>
                  <button onClick={handleClick}>Click me </button>
              </div>
          );
         }
       
      export default Student;

 