import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameInputValue: '',
      courseInputValue: '',
      gradeInputValue: ''
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');
  }

  render() {
    let { nameInputValue, courseInputValue, gradeInputValue } = this.state;

    return (
      <div className="gradeFormContainer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder=" Student Name"
            className="gradeFormInput"
            value={nameInputValue}
          />
          <input
            type="text"
            placeholder=" Course"
            className="gradeFormInput"
            value={courseInputValue}
          />
          <input
            type="text"
            placeholder=" Grade"
            className="gradeFormInput"
            value={gradeInputValue}
          />
          <button className="btn btn-primary">Add</button>
          <button className="btn btn-secondary">Cancel</button>
        </form>
      </div>
    )
  }
}

export default GradeForm;
