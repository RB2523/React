   
    import React , {Component} from "react";
    import PropTypes from "prop-types";

      class Student extends Component{
         
         render(){
             return (
               <div>
                   <h1>{this.props.name}</h1>
                   <h1>{this.props.roll}</h1>
              </div>
          );
         }
       
      }


      // Student.propTypes = {       // 1
      //   name:PropTypes.string,
      //   roll:PropTypes.number
      // }

      Student.propTypes = {       // 2
        name:PropTypes.string,
        roll:PropTypes.number.isRequired
      }

      Student.defaultProps = {   //3
        name:"ram"
      }

      export default Student;

 