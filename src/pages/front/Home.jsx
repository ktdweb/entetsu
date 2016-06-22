import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="Home">
        <DocumentTitle title="遠鉄アシスト" />

        <img
          src="imgs/pages/top.jpg"
          width="1040"
          height="1080"
          alt="top"
          />
      </article>
    );
  }
}
