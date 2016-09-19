import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import WorkStore from '../../../js/stores/WorkStore'
import WorkActions from '../../../js/actions/WorkActions'


export default class Works extends React.Component {

  constructor(props) {
    super(props);

    let works = WorkStore.read();
    this.state = {
      works: works
    }
  }

  componentWillMount() {
    WorkStore.subscribe(this.updateState.bind(this));
    WorkActions.create();
  }

  componentWillUnmount() {
    WorkStore.destroy(this.updateState.bind(this));
  }

  render() {

    let eachWork;
    if (this.state.works.length > 0) {
      eachWork = Object.keys(this.state.works).map((i) => {
        return (
          <EachWork key={i} data={this.state.works[i]} />
        );
      });
    }

    return(
      <article id="Works">
        <DocumentTitle title="求人情報" />
        <h1>
          <i className="fa fa-paperclip" />
          求人情報
        </h1>

        <table className="sheet">
          <tbody>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>時間</th>
              <th>給与</th>
              <th>更新日</th>
            </tr>

            {eachWork}

          </tbody>
        </table>
      </article>
    );
  }

  updateState() {
    let res = WorkStore.read();
    this.setState({ works: res });
  }
}

class EachWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    return (
      <tr>
        <td>{data.id}</td>
        <td>
          <Link
            to={'/admin/works/detail/' + data.id}
            >
            {data.title}
          </Link>
        </td>
        <td>{data.abbr_time}</td>
        <td>{data.unit_wage + data.abbr_wage + '円'}</td>
        <td>{data.modified}</td>
      </tr>
    );
  }
}
