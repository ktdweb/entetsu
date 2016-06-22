import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Driving extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="Driving">
        <DocumentTitle title="遠鉄アシスト | 運行管理" />

        <img
          src="imgs/pages/driving.jpg"
          width="1040"
          height="1090"
          alt="driving"
          />
      </article>
    );
  }
}
