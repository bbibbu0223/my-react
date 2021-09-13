import './App.css';
import Music from './contents/Music';
import Image from './contents/Image';
import Hobby from './contents/Hobby';

import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Main from './contents/Main';

function App() {
  return (
  <>
  
  <BrowserRouter>
    <div className="contents">
      <h1>I love it</h1>
      
        <div>
          <ul className="con-list">
              <Link to="/">Main</Link>

            <li>
              <Link to="/Music">Music</Link>
              {/* <a href="#">Music</a> */}
            </li>
            <li>
              <Link to="/Image">Image</Link>
              {/* <a href="#">Image</a> */}
            </li>
            <li>
              {/* <Link to="/Hobby">Hobby</Link> */}
              {/* <a href="#">Hobby</a> */}
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/Music"><Music /></Route>
          <Route exact path="/Image"><Image /></Route>
          {/* <Route  path="/Hobby"><Hobby /></Route> */}
        </Switch>
    </div>
    </BrowserRouter>
    

  </>
  );
}

export default App;


