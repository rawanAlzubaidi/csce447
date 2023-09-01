import React from 'react';
import good1 from './good1.png';

function GoodDesignPage() {
  return (
    <div>
      <h1>Good Data Visulization</h1>
      <p>The following data visualization effectively employs web animations to gradually display the data, enabling readers to understand the information in a sequential manner. After a brief interval, the bar becomes populated with the remaining information, providing a comprehensive overview.</p>
      <img src={good1} className="good-bad-pic" alt="logo" />
    </div>
  );
}

export default GoodDesignPage;
