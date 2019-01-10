import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Particles from 'react-particles-js'

import Icon from '../images/triskele.svg'

class Header extends React.Component {
  render() { 
    return (
      <>
        <HeaderContainer>
          <HeaderInner>
            <Logo>
              <img src={Icon} alt="triskele logo" />
            </Logo>
            <nav>
              <ul>
                <li><Link to='/contact'>Code</Link></li>
                <li><Link to='/contact'>Writing</Link></li>
                <li><Link to='/contact'>Let's Talk</Link></li>
              </ul>
            </nav>
          </HeaderInner>
        </HeaderContainer>
        <Particles 
          width="100%"
          height="100vh"
          params={params}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1
          }}
        />
        <MainBody>
          <MainInner>
            <h1>Hi, I'm Martin, a <b>software engineer</b><br/> based in Gloucestershire.</h1>
            <p>there is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.</p>
            <p className="emojis">👨‍💻 🌳 🤸‍♂️ 🥊 🙏</p>
          </MainInner>
        </MainBody>
        <Footer>
          <FooterInner>
            <span>This website is open source and available on <a href="">GitHub</a></span>
            <span><a href="mailto:me@martinseanhunt.com">me@martinseanhunt.com</a></span>
          </FooterInner>
        </Footer>
      </>
    )
  }
}

const Inner = styled.div`
  max-width: 1100px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderContainer = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  z-index: 4;
  padding: 35px;
`

const HeaderInner = styled(Inner)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 100%;

  h1 {
    font-size: 26px;
  }

  ul {
    list-style: none
  }

  li {
    display: inline-block;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
    
    a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 500;
      opacity: 0.6;
    }

    a:hover {
      opacity: 1;
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 25px;
    display: inline-block;
    margin-right: 3px;
  }

  h1 {
    display: inline-block;
  }
`

/*
split effect: background-image: -webkit-linear-gradient(105deg, #A10606 50%, #8C0E0E 30%);
nice red: 280301
nice gradient: background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
nice blues: #1A315B, 37517e 
*/
const MainBody = styled(Container)`
  height: calc(100vh - 70px);
  color: #fff;
  align-items: center;
`

const MainInner = styled(Inner)`
  position: relative;
  z-index: 3;
  width: 100%;
  
  h1{
    font-size: 48px;
    font-weight: bold;
    max-width: 800px;

    b {
      color: #00fffa;
    }
  }

  p {
    max-width: 600px;
    font-size: 16px;
  }

  .emojis {
    font-size: 18px;
  }
`

const Footer = styled(Container)`
  position: fixed;
  bottom: 0;
  left: 0;
  color: #fff;
  width: 100%;
  padding: 35px;
  opacity: 0.7;
`

const FooterInner = styled(Inner)`
  width: 100%;
  display: flex; 
  justify-content: space-between;
  max-width: 100%;
  font-size: 12px;
  line-height: 12px;

  p {
    margin: 0;
  }

  a { color: #fff; opacity: 0.8; }
`

const params = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff" // Swap these values for another interesting look
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#fff", // Swap these values for another interesting look
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 2
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default Header
