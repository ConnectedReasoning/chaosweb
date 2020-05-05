
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home      from './components/home/home';
import Covid      from './components/covid/covid';
import Menu       from './components/menu/menu';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const  App = (props) => {


  return (
    <div className="App" >
        <BrowserRouter>
          <div className="main">
            <Route  exact path="/" render={(props) => {
                  return ( <div><Menu /><Home {...props} /></div>)
              }}
            /> 
            <Route  exact path="/build" render={(props) => {
                return ( <div><Menu /><Covid {...props} /></div>)
              }}
            />
          </div>
        </BrowserRouter>
    </div>
  );
}
export default App;
