export function trackIdentity(userID, traits) {

}

export function aliasIdentity(userID, previousID) {

}

export function trackPage({ title }) {
  window.ga('send', 'pageview', {
    title
  });
}

export function trackEvent({ id, properties = {} }) {
  window.ga('send', 'event', properties.category || 'All', id);
}

export function start(accountID) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', accountID, 'auto');

  // Pages must use Analytics.Page component.
  //ga('send', 'pageview');
}
