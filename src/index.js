import React from 'react';
import { render } from 'react-dom';
// import { hot } from 'react-hot-loader';
// import { App } from './components/';
import { App } from './components-rethink/';

// if (module.hot) {
//   module.hot.accept('./App.js', () => {
//     const RootContainer = require('./App.js').default;
//     render(<RootContainer />, document.getElementById('app'));
//   });
// }

render(<App />, document.getElementById('app'));
module.hot.accept();
// console.log(module.hot.accept);

// render(App, document.getElementById('app'));

// export default hot(module)(App);
