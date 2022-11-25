import Home from "./Pages/Home"
import Film from "./Pages/FilmDetail";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppBar from "./Components/AppBar"

function App() {
  return (

      /*<div className="App">
          <ButtonAppBar/>
          <Film/>
      </div>*/

      <Router>
          <div className="App">
              <AppBar/>
              <Routes>
                  <Route exact path='/' element={<Home/>}/>
                  <Route exact path='/film/:id' element={<Film/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
