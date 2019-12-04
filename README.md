> git clone git@github.com:IvanPakhomov/htest api && cd api && npm i && npm run test && npm run build

> nano test.js

```javascript
const Api = require('./build').default;

Api.users.get(2).then(function(response) {
  console.log(response);
});
```

> node test
