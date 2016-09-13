import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article id="Home">
        <DocumentTitle title="Admin Home" />
        <h1>Home</h1>
      </article>
    );
  }
}
