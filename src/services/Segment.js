export default class Segment {
  /**
   * Create a service that loads and sends to Segment.io
   *
   * @param  {String} accountID Your particular Segment.io key
   */
  constructor(writeKey) {
    this.writeKey = writeKey;
  }

  /**
   * Load Segment.io API
   */
  start() {
    // 3.0.1 snippet
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.0.1";
    analytics.load(writeKey);
    analytics.page()
    }}();
  }

  /**
   * Track a page view
   *
   * @param  {String} title  The page’s title
   */
  trackPage({ title }) {
    window.analytics.trackPage(title);
  }

  /**
   * Track a custom event
   *
   * @param  {String} id         The string identifing this event
   * @param  {Object} properties Extra info to send along
   */
  trackEvent(id, properties = {}) {
    window.analytics.track(id, properties);
  }

  /**
   * Track that a particular user is active
   *
   * @param  {String} userID The string identifying the user
   * @param  {Object} traits Extra info to send along with the user
   */
  trackIdentity(userID, traits) {
    window.analytics.identify(userID, traits);
  }

  /**
   * Associates the two user identities together
   *
   * @param  {String} userID     The string identifying the user
   * @param  {String} previousID The previous identifier the user was recognized by
   */
  aliasIdentity(userID, previousID) {
    window.analytics.alias(userID, previousID);
  }
}
