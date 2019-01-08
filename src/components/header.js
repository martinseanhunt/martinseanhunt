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
              <h1>MARTINSEANHUNT</h1>
            </Logo>
            <Link to='/contact'>contact</Link>
          </HeaderInner>
        </HeaderContainer>
        <Particles 
          width="100%"
          height="100vh"
          params={params}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <MainBody>
          <MainInner>
            <h1>Hi I'm Martin, a <b>software engineer</b> based in Gloucestershire, UK.</h1>
            <p>there is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker, or smarter. Everything is within. Everything exists. Seek nothing outside of yourself.</p>
          </MainInner>
        </MainBody>
      </>
    )
  }
}

const Inner = styled.div`
  max-width: 1400px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
  z-index: 4;
`

const HeaderInner = styled(Inner)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 50px 0;

  a {
    color: #0fe3ff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
  }

  h1 {
    font-size: 26px;
    font-weight: normal;
  }
`

const Logo = styled.div`
  img {
    height: 50px;
  }
`

/*
split effect: background-image: -webkit-linear-gradient(105deg, #A10606 50%, #8C0E0E 30%);
nice red: 280301
nice gradient: background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
nice blues: #1A315B, 37517e 
*/
const MainBody = styled(Container)`
  background: #1A315B;
  background-image: linear-gradient(135deg, #344d77 0%, #1A315B 100%);
  height: 100vh;
  color: #fff;
  align-items: center;
`

const MainInner = styled(Inner)`
  position: relative;
  z-index: 3;
  width: 100%;
  
  h1{
    font-size: 52px;
    font-weight: bold;
    max-width: 940px;

    b {
      color: #0fd7ff;
    }
  }

  p {
    max-width: 800px;
    font-size: 16px;
  }
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
      "value": "#344d77" // Swap these values for another interesting look
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
      "value": 0.5,
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
      "color": "#4ca9ce", // Swap these values for another interesting look
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
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
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": false
    },
    "modes": {
      "grab": {
        "distance": 400,
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
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default Header
