import React from "react";
import { useEffect } from "react";

// FUNCTIONAL COMPONENT
const InstructorFunc = (props) => {

  useEffect(() => {
    return () => {
      // whenever component is unmounted
    }
  }, []);

  return (
    <div className="text-white">
      Name: {props.instructor.name} <br />
      Email: {props.instructor.email} <br />
      Phone: {props.instructor.phone} <br />
    </div>
  );
}

export default InstructorFunc;