function getReact(version = '16.8.0', pattern = 'prod') {
  const React = require(`../source/${version}/${pattern}/react.js`);
  const ReactDOM = require(`../source/${version}/${pattern}/react-dom.js`);
  const Scheduler = require(`../source/${version}/${pattern}/scheduler.js`);
  return {
    React,
    ReactDOM,
    Scheduler,
  }
} 

export default getReact;