import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grades: []
    };

    this.addStudent = this.addStudent.bind(this);
  }

  getAverageGrade() {
    const { grades } = this.state;
    let gradeSum = 0;

    for (let index = 0; index < grades.length; index++) {
      gradeSum += parseInt(grades[index].grade);
    }

    return Math.ceil(gradeSum / grades.length).toString();
  }

  componentDidMount() {
    fetch('/api/grades').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        grades: data
      });
    });
  };

  addStudent(studentInfo) {
    let { nameInputValue, gradeInputValue, courseInputValue } = studentInfo;
    const studentData = {
      "name": nameInputValue,
      "course": courseInputValue,
      "grade": gradeInputValue
    };

    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  //What does this mean/do??
      },
      body: JSON.stringify(studentData)
    }).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        grades: [...this.state.grades, data]
      })
    })
  };

  render() {
    return (
      <React.Fragment>
        <Header average={this.getAverageGrade()} />
        <GradeTable grades={this.state.grades} />
        <GradeForm addStudent={this.addStudent} />
      </React.Fragment>
    );
  }
}

export default App;
