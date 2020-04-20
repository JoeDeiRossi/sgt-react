import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades.map(grade => {
    return <Grade key={grade.id} grade={grade} />;
  });

  return (
    <div className="container gradeTableContainer">
      <div className="row gradeTableHeader">
        <div className="col-4 sgtColumn">
          Student Name
        </div>
        <div className="col-4 sgtColumn">
          Course
        </div>
        <div className="col-2 sgtColumn">
          Grade
        </div>
        <div className="col-2 sgtColumn">
          Operations
        </div>
      </div>
      {grades}
    </div>
  );
}

export default GradeTable;
