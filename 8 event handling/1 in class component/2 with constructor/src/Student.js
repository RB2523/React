   
    import React , {Component} from "react";

      class Student extends Component{


        constructor(props){
          super(props);
          this.handleClick1 = this.handleClick1.bind(this);
          this.handleClick2 = this.handleClick2.bind(this);
        }

         handleClick1 = () => {               
          alert("click occured 1");
          console.log(this);  
        }

        handleClick2 = () => {               
          alert("click occured 2");
          console.log(this);  
        }

         render(){
             return (
               <div>
                 <h1>Handling Event</h1>
                  <button onClick={this.handleClick1}>Click me 1</button>
                  <button onClick={this.handleClick2}>Click me 2</button>
              </div>
          );
         }
       
      }

      export default Student;

 