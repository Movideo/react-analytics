# Analytics
React components to allow easy usage of Google Analytics.

## What is Analytics?


## Installation

```sh
$ npm install @movideo/react-analytics
```

## Usage

### Page

Add to a page component, such as one that you pass to a router.

```javascript
import Analytics from 'react-analytics';

class MyPageComponent extends React.Component {
  render() {
    // Wrap in <Analytics.Page>
    return (
      <Analytics.Page title='Page title'>
        <div>
          Your normal component.
        </div>
      </Analytics.Page>
    );
  }
}
```

### Events

Add to a component that you want to know the user is using, such as a modal.
An event will be fired when the component appears, and another optional one when
it disappears.

```javascript
import Analytics from 'react-analytics';

class MyTransientComponent extends React.Component {
  render() {
    // Wrap in <Analytics.Page>
    return (
      <Analytics.VisibilityEvent show='foo-opened' hide='foo-closed'>
        <div>
          Your normal component.
        </div>
      </Analytics.VisibilityEvent>
    );
  }
}
```

### Services

```javascript
import Analytics from 'react-analytics';
import AnalyticsServices from 'react-analytics/services';

const accountID = ...
const service = new AnalyticsServices.GoogleAnalytics(accountID);

class App extends React.Component {
  componentWillMount() {
    // If in the browser
    if (window) {
      service.start();
    }
  }

  static get childContextTypes() {
    return {
      analytics: Analytics.propType
    };
  }

  getChildContext() {
    return {
      analytics: service
    };
  }

  render() {
    // ...
  }
}
```


## Authors
- Patrick Smith / [@BurntCaramel](https://github.com/BurntCaramel)

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
