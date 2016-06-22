import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Mansion extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="Mansion">
        <DocumentTitle title="遠鉄アシスト | マンション管理" />

        <img
          src="imgs/pages/mansion.jpg"
          width="1040"
          height="1090"
          alt="mansion"
          />
      </article>
    );
  }
}
