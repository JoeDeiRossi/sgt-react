import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInputValue: '',
      courseInputValue: '',
      gradeInputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  };

  resetForm() {
    this.setState({
      nameInputValue: '',
      courseInputValue: '',
      gradeInputValue: ''
    })
  };

  handleChange(event) {
    let currentInput = event.target.name + 'InputValue';
    this.setState({ [currentInput]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addStudent(this.state);
    this.resetForm();
  };

  handleCancel(event) {
    event.preventDefault();
    this.resetForm();
  }

  render() {
    let { nameInputValue, courseInputValue, gradeInputValue } = this.state;

    return (
      <div className="gradeFormContainer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder=" Student Name"
            autoComplete="off"
            className="gradeFormInput"
            value={nameInputValue}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="course"
            placeholder=" Course"
            autoComplete="off"
            className="gradeFormInput"
            value={courseInputValue}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="grade"
            placeholder=" Grade"
            autoComplete="off"
            className="gradeFormInput"
            value={gradeInputValue}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary addButton">Add</button>
          <button className="btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default GradeForm;
