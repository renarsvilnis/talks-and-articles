import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';

import 'highlight.js/styles/arduino-light.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/monokai.css';

export default class Editor extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  };

  render () {
    return (
      // <form className="editor pure-form">
      <CodeMirror
        options={{
          mode: 'markdown',
          theme: 'monokai',
          // lineNumbers: true,
          viewportMargin: Infinity
        }}
        autoFocus
        value={this.props.value}
        onChange={this.props.onChange}
      />
      // </form>
    );
  }
}
