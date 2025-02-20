import React from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";

class CycloOPediaClassPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: ""
    };
  }

  // where data can be loaded into the initial state
  componentDidMount = async () => {
    console.log("ComponentDidMount");

    if (JSON.parse(localStorage.getItem("cyclopediaState"))) {
      // this.setState(JSON.parse(localStorage.getItem("cyclopediaState")));
    } else {
      const response = await getRandomUser();
      console.log(response.data);
      
      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number
          }
        }
      });
    }
  }

  // where component modified after each state update
  componentDidUpdate = async(prevProps, prevState) => {
    console.log("ComponentDidUpdate");
    // saving local storage 
    localStorage.setItem("cyclopediaState", JSON.stringify(this.state));
    console.log("Old State: " + prevState.studentCount);
    console.log("New State: " + this.state.studentCount);
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1
      }
    });
  }

  handleRemoveAllStudents = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0
      }
    });
  }

  handleToggleInstructor = () => {
    this.setState((prevState) => {
      return {
        hideInstructor: !prevState.hideInstructor
      }
    });
  }

  render() {
    console.log("Render");
    return (
      <div>

        <div className="p-3">
          <span className="h4 text-success">Instructor</span>
          <i 
            className={`bi ${this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"}  btn btn-success btn-sm`}
            onClick={this.handleToggleInstructor}
          ></i>
          {this.state.hideInstructor && this.state.instructor ? (<Instructor instructor={this.state.instructor} />) : null}
        </div>


        {/* Controlled components: values automatically stored in state */}
        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input 
            type="text" 
            placeholder="Name..." 
            value={this.state.inputName} 
            onChange={(e) => this.setState({ inputName: e.target.value })} 
          />
          <br />
          <textarea 
            placeholder="Feedback..." 
            value={this.state.inputFeedback}
            onChange={(e) => this.setState({ inputFeedback: e.target.value })} 
          />
        </div>

        <div className="p-3">
          <span className="h4 text-success">Students</span>
          <div>Student Count : {this.state.studentCount}</div>
          <button className="btn btn-success btn-sm" onClick={this.handleAddStudent}>Add Student</button>
          &nbsp;
          <button className="btn btn-danger btn-sm" onClick={this.handleRemoveAllStudents}>Remove All Students</button>

          {this.state.studentList.map((student, index) => {
            return <div className="text-white" key={index}>- {student.name}</div>
          })}
        </div>
      </div>
    );
  }
}

export default CycloOPediaClassPage;