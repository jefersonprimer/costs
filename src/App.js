import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

import './App.css'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Projects'>
            <Projects />
          </Route>
          <Route exact path='/company'>
            <Company />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/newproject'>
            <NewProject />
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;