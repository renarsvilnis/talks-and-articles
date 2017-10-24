import React from 'react';
import PropTypes from 'prop-types';
import highlight from 'highlight.js';

export default class CodeBlock extends React.Component {
  static propTypes = {
    literal: PropTypes.string,
    language: PropTypes.string
  };

  componentDidMount () {
    this.highlightCode();
  }

  componentDidUpdate () {
    this.highlightCode();
  }

  highlightCode () {
    highlight.highlightBlock(this.refs.code);
  }

  render () {
    return (
      <pre>
        <code
          ref={'code'}
          className={this.props.language}
        >
          {this.props.literal}
        </code>
      </pre>
    );
  }
}
