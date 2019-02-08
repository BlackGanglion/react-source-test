import getReact from './source';
const { React, ReactDOM } = getReact();

console.log(React.version);

class HelloMessage extends React.Component {
  constructor(props) {
    super();
    console.log(props, this.props);
  }
  render() {
    console.log(this.props);
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('main'))