export default class Combiner {
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
