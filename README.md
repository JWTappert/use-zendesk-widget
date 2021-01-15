# use-zendesk-widget
This is the simplest way to add the Zendesk help widget to your React application!
# Introduction
This React hook will enable Zendesk's help widget on your application which can support multiple Zendesk products like live chat, contact form, talk, answer bot, and help center. You can easily customize your support experience with additional settings. Definitely checkout [the documentation for this widget](https://developer.zendesk.com/embeddables/docs/widget/introduction) to better understand all the options available for customization.
## Install
```
yarn add use-zendesk-widget  OR  npm install use-zendesk-widget
```
## Usage
At the root of your application, or really in any place that is hook friendly, drop the hook in with your zendesk key which can be found in your embed code once you're logged into Zendesk admin.
```javascript
import useZendeskWidget from 'use-zendesk-widget';

const YourApp = () => {
  useAdminZendeskWidget("your-zendesk-key-here", {
    webWidget: {
      color: { theme: '#61dafb' }
    }
  });
  return <h1>Hello World!</h1>
}
```
### Result
![Screen Shot 2021-01-15 at 7 39 57 AM](https://user-images.githubusercontent.com/12875898/104747136-011c0a80-5705-11eb-976f-529e541841d0.png)
# Resources
[Zendesk Web Widget Documentation](https://developer.zendesk.com/embeddables/docs/widget/introduction)
# License
MIT