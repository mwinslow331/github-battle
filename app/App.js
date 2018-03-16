import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Popular from './components/Popular';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Battle from './components/Battle';


class App extends Component{
  render(){
    return(
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
