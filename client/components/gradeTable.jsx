import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades.map(grade => {
    return <Grade key={grade.id} grade={grade} />;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-7 sgtColumn">
          Student Name
        </div>
        <div className="col sgtColumn">
          Course
        </div>
        <div className="col sgtColumn">
          Grade
        </div>
      </div>
      {grades}
    </div>
  );
}

export default GradeTable;
