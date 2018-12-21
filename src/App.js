import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home'
import Dresses from './Dresses'
import Shops from './Shops'
import Events from './Events'
import Profile from './Profile'
import Discover from './Discover'
import AboutUs from './AboutUs'

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous"/>

          <header>
            <div className="container">
            <Link to="/home"><h1>DRESS SCAPE</h1></Link>
            <h2>Discover your dream dress</h2>
            <span className="toggle-add">+</span>
            </div>

            <nav>
              <ul>
                <li><Link to="/dresses">Dresses</Link></li>
                <li><Link to="/shops">Shops</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/discover">Discover</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </nav>
          </header>

          <main>
            <Route path="/" exact component={Home}/>
            <Route path="/dresses" component={Dresses}/>
            <Route path="/shops" component={Shops}/>
            <Route path="/events" component={Events}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/discover" component={Discover}/>
            <Route path="/about-us" component={AboutUs}/>
          </main>

          <footer>
            <div className="container">
              <div className="footer-column">
                <div className="footer-recently-viewed">
                  <h3>Recently viewed</h3>
                  <ul>
                    <li>LOLA by Erin Claire Bridal</li>
                    <li>Zara Lux by Erin Claire Bridal</li>
                    <li>Amelia by Erin Claire Bridal</li>
                  </ul>
                </div>
              </div>

            <div className="footer-column">
              <div className="tag-cloud">
                <h3>Tag Cloud</h3>
                <ul>
                  <li>A-line</li>
                  <li>Capped-sleeve</li>
                  <li>Train</li>
                  <li>Lace</li>
                  <li>Heart-shaped</li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="follow-us">
                <h3>Follow us</h3>
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>          
                </ul>
              </div>
              <div className="footer-links">
              <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
            </div>
          </div>

            <div className="footer-bottom">
              <p>&copy; 2018 - Dress Scape - All rights reserved.</p>
            </div>
          </footer>
        </div>
        <div ClassName="return-to-top">
          <div className = "Up-Arrow">
           <i class="fas fa-long-arrow-alt-up"></i>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
