import '../../App.css';
import React from 'react';

function CurrentDate() {
  return (
    <div id="current-date">
      <p>Copyright {new Date().getFullYear()} Chelsea Avery</p>
    </div>
  );
}

export default CurrentDate;
