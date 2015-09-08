import React, { PropTypes } from 'react';


export default class Event extends React.Component {
  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      idOut: PropTypes.string,
      properties: PropTypes.object
    };
  }

  static get contextTypes() {
    return {
      trackEvent: PropTypes.func.isRequired
    };
  }

  componentDidMount() {
    const { id, properties } = this.props;
    this.context.trackEvent({ id, properties });
  }

  componentWillUnmount() {
    const { idOut, properties } = this.props;
    if (idOut) {
      this.context.trackEvent({ id: idOut, properties });
    }
  }

  render() {
    return this.props.children;
  }
}
