import Particles from 'react-particles-js';

function Particle(){
    return(
        <div id="particles-container">
        <Particles
          id="particles-js" 
          params={
            {
              "background": {
                "color": {
                  "value": "#343a40"
                },
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
              },
              "interactivity": {
                "events": {
                  "onClick": {
                    "mode": "push"
                  },
                  "onDiv": {
                    "selectors": "#repulse-div",
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onHover": {
                    "mode": "repulse"
                  }
                },
                "modes": {
                  "bubble": {
                    "distance": 200,
                    "duration": 2,
                    "opacity": 0.8,
                    "size": 40
                  },
                  "grab": {
                    "distance": 400
                  }
                }
              },
              "particles": {
                "color": {
                  "value": "#ffffff"
                },
                "links": {
                  "color": {
                    "value": "#ffffff"
                  },
                  "distance": 150,
                  "enable": true,
                  "opacity": 0.2
                },
                "move": {
                  "attract": {
                    "rotate": {
                      "x": 600,
                      "y": 1200
                    }
                  },
                  "enable": true,
                  "outModes": {
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                  }
                },
                "number": {
                  "density": {
                    "enable": true
                  },
                  "value": 80
                },
                "opacity": {
                  "random": {
                    "enable": true
                  },
                  "value": 0.5,
                  "animation": {
                    "enable": true,
                    "minimumValue": 0.1,
                    "speed": 3
                  }
                },
                "shape": {
                  "options": {
                    "polygon": {
                      "nb_sides": 5
                    },
                    "star": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                      "width": 100,
                      "height": 100
                    },
                    "images": {
                      "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  }
                },
                "size": {
                  "random": {
                    "enable": true
                  },
                  "value": 5,
                  "animation": {
                    "enable": true,
                    "minimumValue": 0.1,
                    "speed": 20
                  }
                },
                "stroke": {
                  "color": {
                    "value": "#000000",
                    "animation": {
                      "enable": false,
                      "speed": 1,
                      "sync": true
                    }
                  }
                }
              }
            }
          } 
        />
        </div>
    )
}

export default Particle;