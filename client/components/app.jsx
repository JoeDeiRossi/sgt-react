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
  }

  getAverageGrade() {
    const { grades } = this.state;
    let gradeSum = 0;

    for (let index = 0; index < grades.length; index++) {
      gradeSum += grades[index].grade;
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
  }

  render() {
    return (
      <React.Fragment>
        <Header average={this.getAverageGrade()} />
        <GradeTable grades={this.state.grades} />
        <GradeForm />
      </React.Fragment>
    );
  }
}

export default App;
