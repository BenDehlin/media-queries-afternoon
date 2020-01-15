import React, {Component} from 'react'

export default class Header extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
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
            <button id="menu-button">MENU</button>
          </nav>
        </section>
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