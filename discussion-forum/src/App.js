import React, { Component } from 'react'
import { connect } from 'react-redux';

// Pages
import Home from './pages/Home'
import Board from './pages/Board'
import Drinking from './pages/Drinking'
import Lawn from './pages/Lawn'
import Mobile from './pages/Mobile'
import Sports from './pages/Sports'
import Tabletop from './pages/Tabletop'
import Video from './pages/Video'

// Components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.getCurrentLocation()
    }
  }

  getCurrentLocation = () => {
    return window.location.pathname.slice(1)
  }

  navigateTo = (event, location) => {
    event.preventDefault()
    this.setState({currentPage: location})
    window.history.replaceState({}, 'Geddit', location)
  }

  render() {
    return (
      <div style={{ minHeight: '100vh' }}>
        <Navbar navigateTo={this.navigateTo} />
        { this.state.currentPage === 'board' ? <Board /> : null }
        { this.state.currentPage === 'drinking' ? <Drinking /> : null }
        { this.state.currentPage === 'lawn' ? <Lawn /> : null }
        { this.state.currentPage === 'mobile' ? <Mobile /> : null }
        { this.state.currentPage === 'sports' ? <Sports /> : null }
        { this.state.currentPage === 'tabletop' ? <Tabletop /> : null }
        { this.state.currentPage === 'video' ? <Video /> : null }
        { ['board','drinking','lawn','mobile','sports','tabletop','video'].includes(this.state.currentPage) ? null : <Home /> }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({ entries: state })

App = connect(mapStateToProps)(App);

export default App;
