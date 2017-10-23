import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import CodeBlock from './CodeBlock';

const MARKDOWN_RENDERERS = Object.assign({}, Markdown.renderers, {CodeBlock});

export default class Preview extends PureComponent {
  static propTypes = {
    source: PropTypes.string
  };

  state = {
    htmlMode: 'raw'
  }

  render () {
    return (
      <Markdown
        className={'result'}
        source={this.props.source}
        skipHtml={this.state.htmlMode === 'skip'}
        escapeHtml={this.state.htmlMode === 'escape'}
        renderers={MARKDOWN_RENDERERS}
      />
    );
  }
}
