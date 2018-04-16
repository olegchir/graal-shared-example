import React from 'react';

class NLOComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {banned : 0, button: buttonCaption};
    this.onBan = this.onBan.bind(this);
  }

  onBan () {
    let newBanned = this.state.banned + 10;
    this.setState({banned: newBanned, 
        button: buttonVariants[Math.round(Math.random())]});
  }

  render() {
    return (<div>
        Количество забаненных : <span>{this.state.banned}</span>
        <div><button onClick={this.onBan}>{this.state.button}</button></div>
      </div>
    );
  }

}

export default NLOComponent;