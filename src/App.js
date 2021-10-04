import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Error from './components/Error/Error';
import Achivements from './components/Achivement/Achivements';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch >
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/users">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/achivements">
            <Achivements />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;