
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Covid      from './components/covid/covid';

import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const  App = (props) => {


  return (
    <div className="App" >
        <BrowserRouter>
          <div className="main">
 
            <Route  exact path="/" render={(props) => {
                return ( <Covid {...props} />)
              }}
            />
          </div>
        </BrowserRouter>
    </div>
  );
}
export default App;
