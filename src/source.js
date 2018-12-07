function getReact(version = '16.6.3', pattern = 'prod') {
  const React = require(`../source/${version}/${pattern}/react.js`);
  const ReactDOM = require(`../source/${version}/${pattern}/react-dom.js`);
  return {
    React,
    ReactDOM,
  }
} 

export default getReact;