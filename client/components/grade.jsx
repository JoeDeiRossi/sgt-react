import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteStudent(this.props.grade.id);
  }

  render() {
    const { name, course, grade } = this.props.grade;

    return (
      <div className="row">
        <div className="col-4 sgtColumn">
          {name}
        </div>
        <div className="col-4 sgtColumn">
          {course}
        </div>
        <div className="col-2 sgtColumn">
          {grade}
        </div>
        <div className="col-2 sgtColumn">
          <button className="btn btn-danger deleteButton" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Grade;
