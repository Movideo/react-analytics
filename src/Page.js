import React, { PropTypes } from 'react';


export default class Page extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string
    };
  }

  static get contextTypes() {
    return {
      analytics: PropTypes.shape({
        trackPage: PropTypes.func.isRequired
      }).isRequired
    };
  }

  componentDidMount() {
    const { title } = this.props;
    this.context.analytics.trackPage({ title });
  }

  render() {
    return this.props.children;
  }
}
