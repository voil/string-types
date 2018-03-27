# string-types

A simple library that combines data as one string. Can be used to add class attributes to html elements.

#### Install

```
$ npm i string-types
```

OR

```
$ yarn add string-types
```

#### Example

```jsx
var StringTypes = require('string-types');
StringTypes('john', 'doe') // => 'john doe'

StringTypes('john', ['doe', { 'yan' : true }]) // => 'john doe yan'
StringTypes({'john': false, 'doe': true}) // => 'doe'
```

#### Our blogs

See [Meanstack.eu - voil](http://meanstack.eu/)
See [Meandjs - ddosdor](http://meandjs.com/)

License
----

MIT


**Ready to Rock&Roll, Hell Yeah!**