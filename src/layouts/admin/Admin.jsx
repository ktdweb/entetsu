import React from 'react'
import { Link } from 'react-router'

export default class Admin extends React.Component {

  constructor(props) {
    super(props);

    document.body.setAttribute('id', 'ready-Admin');
  }

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div id="Admin">
        <h1>Admin</h1>
        {this.props.header}
        {this.props.main}
      </div>
    );
  }
}
