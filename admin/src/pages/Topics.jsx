import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

export default class Topics extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <article id="Topics">
        <DocumentTitle title="新着情報" />
        <h1>
          <i className="fa fa-check-square-o" />
          新着情報
        </h1>

        <table className="sheet">
          <tbody>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>内容</th>
              <th>作成日</th>
            </tr>

            <tr>
              <td>1</td>
              <td>ホームページが公開されました</td>
              <td>内容</td>
              <td>2016-06-30 12:00:00</td>
            </tr>

          </tbody>
        </table>
      </article>
    );
  }
}
