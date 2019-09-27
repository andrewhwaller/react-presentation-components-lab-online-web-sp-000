// Code SimpleComponent Here
import React, {Component} from 'react';

class SimpleComponent extends Component {

  state = {
    mood: 'happy';
  }

  render() {
    return(
      <div onClick={this.handleClick()}>
        {this.state.happy}
      </div>
    )
  }

  handleClick() {
    if { (this.state === 'happy') return
    } else {
      this.state.setState() {
        mood: 'sad';
      }
    }
  }
}
