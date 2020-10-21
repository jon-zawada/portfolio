import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Header from './Header';
import ProjectInfo from './ProjectInfo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: 'about'
    };
    this.changeHover = this.changeHover.bind(this);
  }

  changeHover(event) {
    let route = event.target.getAttribute('value');
    console.log(route);
    this.setState({hover: route});
  }

  render() {
    return (
      <Router>
        <div>
          <Header changeHover={this.changeHover} hover={this.state.hover} />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:id" component={ProjectInfo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
