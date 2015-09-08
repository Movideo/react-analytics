import React, { PropTypes } from 'react';


export default class Page extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string
    };
  }

  static get contextTypes() {
    return {
      trackPage: PropTypes.func.isRequired
    };
  }

  componentDidMount() {
    const { title } = this.props;
    this.context.trackPage({ title });
  }

  render() {
    return this.props.children;
  }
}
