   
    import React , {Component} from "react";

      class Student extends Component{
         
         render(){
             return (
               <div>
                   <h1>{this.props.children}</h1>
              </div>
          );
         }
       
      }

      export default Student;

 