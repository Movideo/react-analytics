export default class GoogleAnalytics {
  /**
   * Create a service that loads and sends to Google Analytics
   *
   * @param  {String} accountID Your Google Analytics account ID
   */
  constructor(accountID) {
    this.accountID = accountID;
  }

  /**
   * Load Google Analytics
   */
  start() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', this.accountID, 'auto');

    // Pages must use Analytics.Page component.
    //ga('send', 'pageview');
  }

  /**
   * Track a page view
   *
   * @param  {String} title  The page’s title
   */
  trackPage({ title }) {
    window.ga('send', 'pageview', {
      title
    });
  }

  /**
   * Track a custom event
   *
   * @param  {String} id         The string identifing this event
   * @param  {Object} properties Extra info to send along
   */
  trackEvent(id, properties = {}) {
    window.ga('send', 'event', properties.category || 'All', id);
  }

  /**
   * Track that a particular user is active
   *
   * @param  {String} userID The string identifying the user
   * @param  {Object} traits Extra info to send along with the user
   */
  trackIdentity(userID, traits) {


  }

  /**
   * Associates the two user identities together
   *
   * @param  {String} userID     The string identifying the user
   * @param  {String} previousID The previous identifier the user was recognized by
   */
  aliasIdentity(userID, previousID) {

  }
}
