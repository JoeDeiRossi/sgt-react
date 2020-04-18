import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { name, course, grade } = this.props.grade;

    return (
      <div className="row">
        <div className="col-7 sgtColumn">
          {name}
        </div>
        <div className="col sgtColumn">
          {course}
        </div>
        <div className="col sgtColumn">
          {grade}
        </div>
      </div>
    );
  }
}

export default Grade;
