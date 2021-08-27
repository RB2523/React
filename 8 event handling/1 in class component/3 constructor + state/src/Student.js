   
    import React , {Component} from "react";

      class Student extends Component{


        constructor(props){
          super(props);

          this.state= {
            message:"state is used"
          }

          this.handleClick1 = this.handleClick1.bind(this);
        }

         handleClick1 = () => {               
           alert("clicked");
        }


         render(){
             return (
               <div>
                 <h1>Handling Event</h1>
                  <h1>{this.state.message}</h1>
                  <button onClick={this.handleClick1}>Click me 1</button>
              </div>
          );
         }
       
      }

      export default Student;

 