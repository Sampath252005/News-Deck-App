import "./App.css";

import React, { useState } from "react";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pagesize = 15;
  const [progress, setProgress] = useState(10);
  return (
    <Router>
      <div>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pagesize={pagesize}
                country="au"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                key="business"
                country="au"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                key="entertainment"
                country="au"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                key="general"
                country="au"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                key="health"
                country="au"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                key="science"
                country="au"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                key="sports"
                country="au"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                key="technology"
                country="au"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
App.defaultProps = {
  country: "us",
  pagesize: 6,
};

App.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
};
