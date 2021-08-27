   
    import React , {Component} from "react";

      class Student extends Component{

        // handleClick(){                   //1
        //   alert("click occured");
        //   console.log(this);  // this ref variable not available
        // }


         handleClick = () => {                 // 2
          alert("click occured");
          console.log(this);  
        }

         render(){
             return (
               <div>
                 <h1>Handling Event</h1>
                  <button onClick={this.handleClick}>Click me</button>
              </div>
          );
         }
       
      }

      export default Student;

 
