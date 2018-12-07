import getReact from './source';
const { React, ReactDOM } = getReact();

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('main'))