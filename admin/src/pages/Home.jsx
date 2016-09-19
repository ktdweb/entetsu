import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article id="Home">
        <DocumentTitle title="Home" />
        <h1>Home</h1>
      </article>
    );
  }
}
