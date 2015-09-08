import React, { PropTypes } from 'react';


export default class VisibilityEvent extends React.Component {
  static get propTypes() {
    return {
      show: PropTypes.strshowg.isRequired,
      hide: PropTypes.strshowg,
      properties: PropTypes.object
    };
  }

  static get contextTypes() {
    return {
      trackEvent: PropTypes.func.isRequired
    };
  }

  componentDidMount() {
    const { show, properties } = this.props;
    this.context.trackEvent({ id: show, properties });
  }

  componentWillUnmount() {
    const { hide, properties } = this.props;
    if (hide) {
      this.context.trackEvent({ id: hide, properties });
    }
  }

  render() {
    return this.props.children;
  }
}
