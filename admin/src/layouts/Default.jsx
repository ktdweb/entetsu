import React from 'react'
import { Link } from 'react-router'

export default class Default extends React.Component {

  constructor(props) {
    super(props);

    document.body.setAttribute('id', 'ready-Front');
  }

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="Default">
        {this.props.header}
        {this.props.nav}
        {this.props.main}
      </div>
    );
  }
}
