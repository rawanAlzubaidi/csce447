import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import GoodDesignPage from './GoodDesignPage';
import BadDesignPage from './BadDesignPage';
import mePic from './rawan_picture.jpg';
import './App.css';
function App() {
  return (
   <Router>
  <div className="App">
    <header className="App-header">
      <div className="content-container"> {/* Create a container for the content */}
          <img src={mePic} className="App-logo" alt="logo" />
          <div className="App-paragraph">
            <p>
              Howdy my name is Rawan Alzubaidi. I am a senior computer science student. I have a passion in web-development and UX/UI design. Outside of my studies, I have an interest in videography and blogging. I believe that  Data visualization is a powerful tool for telling a story with data. Well-designed visualizations, present a narrative that guides the users through the data, helping them understand the significance of the information being presented. This class will allow me to learn more about data visualization best practices and understand how I can analyze data better.
              <a
          className="App-link"
          href="https://rawanaluzbaidi.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          If you would like to check my portfolio
        </a>
            </p>      
            </div>
            </div>
            <div className="button-container">
        <button className="good-design-button">
          <Link to="/good-design" activeClassName="active-link">
            <i className="fas fa-thumbs-up"></i> Good
          </Link>
        </button>
        <button className="bad-design-button">
          <Link to="/bad-design" activeClassName="active-link">
            <i className="fas fa-thumbs-down"></i> Bad
          </Link>
        </button>
      </div>
      <Routes>
      <Route path="/good-design" element={<GoodDesignPage />} />
      <Route path="/bad-design" element={<BadDesignPage />} />
    </Routes>
    </header>
    
  </div>
</Router>

  );
}

export default App;
