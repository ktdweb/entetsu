import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Building extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="Building">
        <DocumentTitle title="遠鉄アシスト | ビル管理" />

        <img
          src="imgs/pages/building.jpg"
          width="1040"
          height="1050"
          alt="building"
          />
      </article>
    );
  }
}
