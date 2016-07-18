import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

var page;

export default class Article extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: props.route.page,
      width: 1040,
      height: 375
    };
  }

  componentWillReceiveProps(props) {
    this.updateState(props);
  }

  componentDidMount() {
    this.updateState();
  }

  componentWillUnmount() {}

  updateState(props = null) {
    if (props) {
      page = props.route.page;
    } else {
      page = this.props.route.page;
    }
    let src = 'imgs/pages/' + page + '.jpg';
    this.setState({
      src: src,
      page: page
    });
  }

  render() {
    return (
      <article id="Building">
        <DocumentTitle title="遠鉄アシスト | ビル管理" />

        <Link to={this.state.page + '_detail'}>
        <img
          src={this.state.src}
          width={this.state.width}
          height={this.state.height}
          alt={this.state.page}
          />
        </Link>
      </article>
    );
  }
}
