import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Works extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id="Works">
        <DocumentTitle title="遠鉄アシスト | 仕事を探す" />

        <img
          src="imgs/pages/works.jpg"
          width="1040"
          height="550"
          alt="mansion"
          />
      </article>
    );
  }
}
