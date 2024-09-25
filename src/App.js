import { useState } from 'react';
import './App.css';
// import About from './componnts/About';
import Navbar from './componnts/Navbar';
import TextForm from './componnts/TextForm';
import Alert from './componnts/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 2000);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#072e50'
      showAlert("Dark mode has been enabled.", "success")
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled.", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          {/* <Routes> */}
            {/* users/ --> Component 1
            users/home --> component 2 */}
            {/* <Route exact path="about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the Text to start working" mode={mode} showAlert={showAlert} />} />
          </Routes> */}
          <TextForm heading="Enter the Text to start working" mode={mode} showAlert={showAlert} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
