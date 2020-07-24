import React, { Component } from 'react'

// import './menuContent.css'

export default class MenuContent extends Component {

    //  static propTypes = {
    //     closeCallback: React.propTypes.func.isRequired
    //   };

  constructor(props) {
    super(props)

    this.items = []
    for (let i=1; i<=5; i++) {
      this.items.push(i)
    }
  }

  render() {
    return (
      <div className="menu">
        {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            // onClick={this.props.closeCallback}
            target="_blank">
            Menu item {i}
          </a>
        </div>)}

        <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
      </div>
    )
  }
}

