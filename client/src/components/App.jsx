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
      hover: window.location.href.split('/')[3]
    };
    this.changeHover = this.changeHover.bind(this);
  }

  changeHover(event) {
    const route = event.target.getAttribute('value');
    this.setState({ hover: route });
  }

  render() {
    const { hover } = this.state;
    return (
      <Router>
        <div>
          <Header changeHover={this.changeHover} hover={hover} />
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
