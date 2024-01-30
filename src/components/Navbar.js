import React, { useState } from 'react'
import About from './About'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  const [themeNav, setThemeNav] = React.useState('light')
  const [themetxt, setThemetxt] = React.useState('Enable Dark Mode')
  const [themeBtn, setThemeBtn] = React.useState('btn btn-light  btn-outline-primary d-flex mx-2')


  const [theme, setTheme] = React.useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const themeControl = () => {
    if (themeNav === 'light') {
      setTheme({
        color: 'white',
        backgroundColor: 'black'
      })
      setThemeNav('dark')
      setThemetxt('Enable Light Mode')
      setThemeBtn('btn btn-dark  btn-outline-primary d-flex mx-2')
    }
    else {
      setTheme({
        color: 'black',
        backgroundColor: 'white'
      })
      setThemeNav('light')
      setThemetxt('Enable Dark Mode')
      setThemeBtn('btn btn-light  btn-outline-primary d-flex mx-2')
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={themeNav}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>

            <div id='toggle_animation'>
              <input type="checkbox" class="checkbox" id="checkbox"/>
                <label for="checkbox" class="checkbox-label">
                  <i class="fa-solid fa-moon"></i>
                  <i class="fas fa-sun"></i>
                  <span class="ball"></span>
                </label>
            </div>


            <button type="button" onClick={themeControl} className={themeBtn}>{themetxt}</button>
            <form className="d-flex" role="search">

              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>

              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* <About themeNav={themeNav} /> */}
    </>
  )
}

Navbar.propType = {

  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'MyWeb',
  aboutText: "Linksss"
};