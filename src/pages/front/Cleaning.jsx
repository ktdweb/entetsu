import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Cleaning extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="Cleaning">
        <DocumentTitle title="遠鉄アシスト | 清掃" />

        <img
          src="imgs/pages/cleaning.jpg"
          width="1040"
          height="1090"
          alt="cleaning"
          />
      </article>
    );
  }
}
