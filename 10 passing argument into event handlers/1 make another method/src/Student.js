   
    import React , {Component} from "react";

      class Student extends Component{

        constructor(props){
          super(props);

          this.state = {
             number:10
          };
        }

         handleClick = (e) => {
           return this.handleAnotherFunction(e, this.state.number );
         }

         handleAnotherFunction = (e , n) => {
            alert(n);
            console.log(e);
         }

         render(){
          return (
               <div>
                 <h1>{this.state.number}</h1>
                  <button onClick={this.handleClick}>Click me </button>
              </div>
            );
          }
             
    }
       
      export default Student;

 