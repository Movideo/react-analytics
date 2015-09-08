import React, { PropTypes } from 'react';


export default class VisibilityEvent extends React.Component {
  static get propTypes() {
    return {
      show: PropTypes.string.isRequired,
      hide: PropTypes.string,
      properties: PropTypes.object
    };
  }

  static get contextTypes() {
    return {
      analytics: PropTypes.shape({
        trackEvent: PropTypes.func.isRequired
      }).isRequired
    };
  }

  componentDidMount() {
    const { show, properties } = this.props;
    this.context.analytics.trackEvent(show, properties);
  }

  componentWillUnmount() {
    const { hide, properties } = this.props;
    if (hide) {
      this.context.analytics.trackEvent(hide, properties);
    }
  }

  render() {
    return this.props.children;
  }
}
