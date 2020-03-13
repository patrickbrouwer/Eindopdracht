import React from "react";
import StudentData from "./StudentData";
import StudentChartAverage from "./StudentChartAverage";

const studentNames = [...new Set(StudentData.map(x => x.name))];

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      StudentData,
      Student: studentNames
    };
  }

  render() {
    return (
      <div className="Student-Page">
        {this.state.Student.map(item => (
          <React.Fragment>
            <h1>
              {item} - Sleep de chart naar links <span role="img">😉</span>
            </h1>

            <StudentChartAverage data={this.state.StudentData} student={item} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Student;
