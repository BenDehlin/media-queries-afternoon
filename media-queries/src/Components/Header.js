import React, {Component} from 'react'

export default class Header extends Component{
  constructor(){
    super()
    this.state = {
      showDropdown: false
    }
  }

  toggleHeader=()=> {
    this.setState({showDropdown: !this.state.showDropdown})
  }

  render(){
    let {showDropdown} = this.state
    return(
      <header>
        <section className="header">
          <a id="logo">Start Bootstrap</a>
          <nav id="desktop-nav">
            <a>SERVICES</a>
            <a>PORTFOLIO</a>
            <a>ABOUT</a>
            <a>TEAM</a>
            <a>CONTACT</a>
          </nav>
          <nav id="mobile-nav">
            <button id="menu-button"
            onClick={() => this.toggleHeader()}>MENU</button>
          </nav>
        </section>
        {showDropdown ?
        (<div id="dropdown">
          <div id="dropdown-menu-items">
            <a>SERVICES</a>
            <a>PORTFOLIO</a>
            <a>ABOUT</a>
            <a>TEAM</a>
            <a>CONTACT</a>
          </div>
          <div></div>
        </div>): null}
        <div class="welcome">
          <div></div>
          <p>
            Welcome To Our Studio!
          </p>
          <h1>IT'S NICE TO MEET YOU</h1>
          <button id="tell-me-more-button">TELL ME MORE</button>
        </div>
      </header>
    )
  }
}