import React from 'react'
import { Link } from 'react-router'

import Cover from './Cover'

export default class Front extends React.Component {

  constructor(props) {
    super(props);

    document.body.setAttribute('id', 'ready-Front');
  }

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="Front">
        {this.props.header}
        {this.props.main}
        {this.props.top}
        {this.props.footer}
      </div>
    );
  }
}
