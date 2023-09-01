import React from 'react';
import good1 from './good1.png';
import good2 from './good2.png';
function GoodDesignPage() {
  return (
    <div>
      <h1>Good Data Visulization</h1>
      <p>The following data visualization effectively employs web animations to gradually display the data, enabling readers to understand the information in a sequential manner. After a brief interval, the bar becomes populated with the remaining information, providing a comprehensive overview.</p>
      <img src={good2} className="good-bad-pic" alt="figure 1" />
      <img src={good1} className="good-bad-pic" alt="figure 2" />


    </div>
  );
}

export default GoodDesignPage;
