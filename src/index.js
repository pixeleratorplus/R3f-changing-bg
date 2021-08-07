import ReactDOM from 'react-dom'
import React from 'react'
import Can from './resources/can'

/** Main component */
function App() {
  return (
    <div class="main">
      <Can />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
