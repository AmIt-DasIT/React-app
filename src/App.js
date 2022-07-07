import Navbar from './component/Navbar';
import About from './component/About';
import './App.css';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  const [darkMode, setdarkMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (darkMode === 'dark') {
      setdarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light Mode"
      // setInterval(() => {
      //   document.title = "This is Amazing !!"
      // }, 1000);
    } else {
      setdarkMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Switch>
            <Route path="/about">
              <About mode={darkMode} />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={darkMode} />
            </Route>
          </Switch> */}
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={darkMode} />
            } />
            <Route exact path="/about" element={<About mode={darkMode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}



