   
    import React , {Component} from "react";

      class Student extends Component{

        constructor(props){
          super(props);

          this.state = {
             name:"ram",
             roll:101
          };
        }

         handleClick = () => {
            this.setState({
              name:"shiv",
              roll:103
            });
         }

         render(){
          return (
               <div>
                 <h1>{this.state.name}</h1>
                 <h1>{this.state.roll}</h1>
                  <button onClick={this.handleClick}>Click me </button>
              </div>
            );
          }
             
    }
       
      export default Student;

 