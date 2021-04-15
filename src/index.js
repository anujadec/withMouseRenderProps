import React from 'react'
import { render } from 'react-dom'
import Quadrant from './Quadrant'
import Mouse from './Mouse'
import Coordinates from './Coordinates'
import PositionIndicator from './PositionIndicator'
import './style.css'

const App = () => (
  <React.Fragment>
    <Mouse
      render={(mouse) => (
        <Quadrant bgColor="#2C5F2D">
          <Coordinates {...mouse} />
          <PositionIndicator {...mouse} color="#97BC62FF" />
        </Quadrant>
      )}
    />
    <Mouse
      render={(mouse) => (
        <Quadrant bgColor="#ED2B33FF">
          <Coordinates {...mouse} />
          <PositionIndicator {...mouse} color="#FAD0C9FF" />
        </Quadrant>
      )}
    />
    <Mouse
      render={(mouse) => (
        <Quadrant bgColor="#00203FFF">
          <Coordinates {...mouse} />
          <PositionIndicator {...mouse} color="#ADEFD1FF" />
        </Quadrant>
      )}
    />
    <Mouse
      render={(mouse) => (
        <Quadrant bgColor="#89ABE3FF">
          <Coordinates {...mouse} />
          <PositionIndicator {...mouse} color="#FCF6F5FF" />
        </Quadrant>
      )}
    />
  </React.Fragment>
)

render(<App />, document.getElementById('root'))
