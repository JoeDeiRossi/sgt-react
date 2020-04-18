import React from 'react';

function Header(props) {
  return (
    <div className="headerContainer">
      <h1 className="header">Student Grade Table</h1>
      <h5 className="header averageGrade">Average Grade <span className="badge badge-secondary">{props.average}</span></h5>
    </div>
  );
}

export default Header;
