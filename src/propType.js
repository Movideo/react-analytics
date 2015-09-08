import React, { PropTypes } from 'react';

export default PropTypes.shape({
  trackPage: PropTypes.func.isRequired,
  trackEvent: PropTypes.func.isRequired,
  trackIdentity: PropTypes.func,
  aliasIdentity: PropTypes.func,
})
