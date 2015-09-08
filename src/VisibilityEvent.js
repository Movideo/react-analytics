import React, { PropTypes } from 'react';


export default class VisibilityEvent extends React.Component {
  static get propTypes() {
    return {
      show: PropTypes.string.isRequired,
      hide: PropTypes.string,
      category: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.number,
      properties: PropTypes.object
    };
  }

  static get defaultProps() {
    return {
      category: 'All'
    };
  }

  static get contextTypes() {
    return {
      analytics: PropTypes.shape({
        trackEvent: PropTypes.func.isRequired
      }).isRequired
    };
  }

  getEventProperties() {
    const { category, label, value, properties } = this.props;
    return Object.assign({}, {
      category, label, value
    }, properties);
  }

  componentDidMount() {
    const { show } = this.props;
    this.context.analytics.trackEvent(show, this.getEventProperties());
  }

  componentWillUnmount() {
    const { hide } = this.props;
    if (hide) {
      this.context.analytics.trackEvent(hide, this.getEventProperties());
    }
  }

  render() {
    return this.props.children;
  }
}
