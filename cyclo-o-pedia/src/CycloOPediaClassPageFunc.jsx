import React, { useEffect, useState, useRef, useId } from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";

// FUNCTIONAL COMPONENT
const CycloOPediaClassPageFunc = () => {
  
  const [state, setState] = React.useState( () => {
    return { 
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    }
  });

  const totalRenderCount = useRef(0);

  const previousStudentCount = useRef(0);

  // more common use of useRef: html elements, timers, etc.
  const inputNameRef = useRef(null);
  const inputFeedbackRef = useRef(null);

  const id = useId(); // ID hook for label and input associations
  const [inputName, setInputName] = useState(() => {
    return "";
  });

  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  // ORDER OF useEffect() CALLS is important

  useEffect(() => {
    // called on every render (no dependency array)
    totalRenderCount.current += 1;
    console.log("Total render count: ", totalRenderCount.current);
  });

  useEffect(() => {
    // called on first render

    const getUser = async () => {
      const response = await getRandomUser();
      console.log(response.data);

      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number
          }
        }
      });
    };
    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  useEffect(() => {
    // called on first render

    const getUser = async () => {
      const response = await getRandomUser();
      console.log(response.data);

      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList, 
            { name: response.data.first_name + " " + response.data.last_name }
          ]
        }
      });
    };
    if (previousStudentCount.current < state.studentCount) {
      getUser();
    } else if (previousStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return {
          ...prevState,
          studentList: []
        }
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    previousStudentCount.current = state.studentCount;
    console.log("Previous student count: ", previousStudentCount.current);
  }, [state.studentCount]);

  useEffect(() => {
    // called on first render and whenever hideInstructor value changes
  }, [inputFeedback, inputName]);

  useEffect(() => {
    inputFeedbackRef.current.focus();
    // called on first render and whenever component is unmounted
    return () => {
      // cleanup code
    }
  }, []);

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1
      }
    });
  }

  const handleRemoveAllStudents = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0
      }
    });
  }

  const handleToggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor
      }
    });
  }

  return (
    <div>

      <div className="p-3">
        <span className="h4 text-success">Instructor</span>
        <i 
          className={`bi ${state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"}  btn btn-success btn-sm`}
          onClick={handleToggleInstructor}
        ></i>
        {state.hideInstructor && state.instructor ? (<Instructor instructor={state.instructor} />) : null}
      </div>

      <div className="p-3">
        Total render count: {totalRenderCount.current}
      </div>

      {/* Controlled components: values automatically stored in state */}
      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input 
          type="text"
          ref={inputNameRef}
          placeholder="Name..." 
          value={inputName} 
          onChange={(e) => setInputName(e.target.value)}
          id={`${id}-inputName`} 
        />{" "}
        <label htmlFor={`${id}-inputName`}>Value: </label>
        <br />
        <textarea
          ref={inputFeedbackRef}
          placeholder="Feedback..." 
          value={inputFeedback}
          onChange={(e) => setInputFeedback(e.target.value )}
          id={`${id}-inputFeedback`}
        />{" "}
        <label htmlFor={`${id}-inputFeedback`}>Value: </label>
      </div>

      <div className="p-3">
        <span className="h4 text-success">Students</span>
        <div>Student Count : {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>Add Student</button>
        &nbsp;
        <button className="btn btn-danger btn-sm" onClick={handleRemoveAllStudents}>Remove All Students</button>

        {state.studentList.map((student, index) => {
          return <div className="text-white" key={index}>- {student.name}</div>
        })}
      </div>
    </div>
  );
}

export default CycloOPediaClassPageFunc;