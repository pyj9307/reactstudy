import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <h5>{this.props.desc[0]}</h5>
        <h5>{this.props.desc[1]}</h5>
        <h5>{this.props.desc[2]}</h5>
        <h5>{this.props.desc[3]}</h5>
        <h5>{this.props.desc[4]}</h5>
      </footer>
    )
  }

}

export default Footer;