import React, { Component } from 'react'

export class ThemeToggle extends Component {
  render() {
        const { toggleTheme } = this.context;

    return (
<button onClick={toggleTheme}> Toggle the Theme</button>
    )
  }
}

export default ThemeToggle
