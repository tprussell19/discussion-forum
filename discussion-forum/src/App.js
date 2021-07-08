import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
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
    window.history.replaceState({}, 'Msg Board', location)
  }

  addOrEditEntry = (title, body, category) => {
    const id = uuid()
    console.log('APP new/edit handler', title, body, category, id)
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_ENTRY',
      title: title,
      body: body,
      category: category,
      id: id,
      votes: 0
    }
    dispatch(action);
  }

  render() {
    console.log("APP LEVEL")
    console.log(this.props)

    return (
      <div style={{ minHeight: '100vh' }}>
        <Navbar navigateTo={this.navigateTo} />
        { this.state.currentPage === 'board' ? <Board addOrEditEntry={this.addOrEditEntry} entries={this.props.entries.filter(e => e.category === 'board')} /> : null }
        { this.state.currentPage === 'drinking' ? <Drinking addOrEditEntry={this.addOrEditEntry} entries={this.props.entries.filter(e => e.category === 'drinking')} /> : null }
        { this.state.currentPage === 'lawn' ? <Lawn addOrEditEntry={this.addOrEditEntry} entries={this.props.entries.filter(e => e.category === 'lawn')} /> : null }
        { this.state.currentPage === 'mobile' ? <Mobile addOrEditEntry={this.addOrEditEntry} entries={this.props.entries.filter(e => e.category === 'mobile')} /> : null }
        { this.state.currentPage === 'sports' ? <Sports addOrEditEntry={this.addOrEditEntry} entries={this.props.entries.filter(e => e.category === 'sports')} /> : null }
        { this.state.currentPage === 'tabletop' ? <Tabletop addOrEditEntry={this.addOrEditEntry} entries={this.props.entries.filter(e => e.category === 'tabletop')} /> : null }
        { this.state.currentPage === 'video' ? <Video addOrEditEntry={this.addOrEditEntry} entries={this.props.entries.filter(e => e.category === 'video')} /> : null }
        { ['board','drinking','lawn','mobile','sports','tabletop','video'].includes(this.state.currentPage) ? null : <Home /> }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({ entries: state })

App = connect(mapStateToProps)(App);

export default App;
