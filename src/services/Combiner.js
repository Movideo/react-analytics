export default class Combiner {
  /**
   * Create a service that forwards to multiple other services
   *
   * @param  {Array} services An array of the other services you would like to wrap
   */
  constructor(services) {
    this.services = services;
  }

  _callServices(methodName, methodArguments) {
    services.forEach(service => {
      service[methodName].apply(service, methodArguments);
    })
  }

  start() {
    _callServices('start');
  }

  trackIdentity(userID, traits) {
    _callServices('trackIdentity', arguments);
  }

  aliasIdentity(userID, previousID) {
    _callServices('aliasIdentity', arguments);
  }

  trackPage({ title }) {
    _callServices('trackPage', arguments);
  }

  trackEvent(id, properties = {}) {
    _callServices('trackEvent', arguments);
  }
}
