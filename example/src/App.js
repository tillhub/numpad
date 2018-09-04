import React, { Component } from 'react'

import NumPad from '@tillhub/numpad'

export default class App extends Component {
  render () {
    return (
      <div>
        <NumPad handleChange={value => console.log(value)} />
      </div>
    )
  }
}
