import React from 'react';
import bad from './bad.png';
import good2 from './good2.png';
function BadDesignPage() {
  return (
    <div>
      <h1>Bad Data Visulization</h1>
      <p>
The pie chart being employed in this scenario is not effectively displaying the data because of its excessive number of categories. This lead to the data points becoming tightly packed and difficult to understand, resulting in an unreadable visual. This issue arises because pie charts are most effective when presenting a limited number of categories to ensure clarity and comprehensibility. .</p>
      <img src={bad} className="good-bad-pic" alt="figure 1" />


    </div>
  );
}

export default BadDesignPage;
