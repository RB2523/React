   
    import React , {Component} from "react";

      class Student extends Component{
         
          state = {
            name:"ram",
            roll:101,
            work:this.props.work
          }

         render(){
             return (
               <div>
                   <h1>{this.state.name}</h1>
                   <h1>{this.state.roll}</h1>
                   <h1>{this.state.work}</h1>
              </div>
          );
         }
       
      }

      export default Student;

 