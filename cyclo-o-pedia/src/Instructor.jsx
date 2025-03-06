import React from "react";

class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Instructor ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Instructor ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Instructor ComponentWillUnmount");
  }

  render() {
    console.log("Instructor Render");
    return (
      <div className="text-white">
        Name: {this.props.instructor.name} <br />
        Email: {this.props.instructor.email} <br />
        Phone: {this.props.instructor.phone} <br />
      </div>
    );
  }
}

export default Instructor;