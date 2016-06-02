import React from 'react'
import CountActions from '../actions/CountActions'
import CountStore from '../stores/CountStore'

function getCountState() {
  return CountStore.read();
}

export default class Count extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = { counts: getCountState };
  }

  componentWillMount() {
    CountStore.create(this._onChange.bind(this));
  }

  componentWillUnmount() {
    CountStore.destroy(this._onChange.bind(this));
  }

  render() {
    return (
      <div>
        <button onClick={CountActions.create}>
          model set</button>
        <button onClick={this._countUp.bind(this)}>
          countup</button>
        <button onClick={CountActions.destroy}>
          model clear</button>

        <p>id: {this.state.counts.id}</p>
        <p>count: {this.state.counts.count}</p>
      </div>
    );
  }

  _countUp() {
    let id = this.state.counts.id;
    let count = this.state.counts.count;
    CountActions.update(id,count);
  }

  _onChange() {
    this.setState({ counts: getCountState() });
  }
}
