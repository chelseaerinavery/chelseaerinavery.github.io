import '../App.css';
import React from 'react';

function CurrentDate() {
  return (
    <div>
      <p>Copyright {new Date().getFullYear()} Chelsea Avery</p>
    </div>
  );
}

export default CurrentDate;
