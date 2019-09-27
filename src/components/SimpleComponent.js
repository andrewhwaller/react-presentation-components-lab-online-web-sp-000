// Code SimpleComponent Here
import React, {Component} from 'react';

class SimpleComponent extends Component {

  state = {
    mood: 'happy';
  }

  render() {
    return(
      <div>
        {this.state.happy}
      </div>
    )
  }
}
