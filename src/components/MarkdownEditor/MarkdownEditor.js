import React from 'react';
import glamorous from 'glamorous';

import Editor from './components/Editor';
import Preview from './components/Preview';

import './MarkdownEditor.css';

const Pane = glamorous.div({
  display: 'flex',
  width: '100%',
  flexDirection: 'column'
});

const PaneTabSelector = glamorous.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
});

const PaneTab = glamorous.div({
  fontSize: '14px',
  padding: '8px 12px',
  lineHeight: 1.4,
  boxSizing: 'border-box',
  ':hover': {
    cursor: 'pointer'
  }
}, ({active = false}) => ({
  fontWeight: active ? 'bold' : 'normal',
  border: `1px solid ${active ? '#333' : 'transparent'}`,
  borderBottom: 'none'
}));

const PaneContainer = glamorous.div({
  display: 'flex',
  width: '100%'
});

const PaneBlock = glamorous.div({
  flex: '100% 1 0'
}, ({active = false}) => ({
  display: active ? 'block' : 'none'
}));

export default class MarkdownEditor extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      markdownSrc: [
        '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
        '[CommonMark](http://commonmark.org) spec\n* Renders actual, "native" React DOM ',
        'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
        '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
        '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
        'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
        '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
        '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
        'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
        'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
        '---------------\n\n',
        'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'
      ].join(''),
      previewTabSelect: false
    };

    this.onMarkdownChange = this.onMarkdownChange.bind(this);
  }

  onMarkdownChange (md) {
    this.setState({markdownSrc: md});
  }

  render () {
    return (
      <Pane>
        <PaneTabSelector>
          <PaneTab active={false}>{'Edit'}</PaneTab>
          <PaneTab active>{'Preview'}</PaneTab>
        </PaneTabSelector>
        <PaneContainer>
          <PaneBlock active={false}>
            <Editor
              value={this.state.markdownSrc}
              onChange={this.onMarkdownChange}
            />
          </PaneBlock>
          <PaneBlock active>
            <Preview source={this.state.markdownSrc} />
          </PaneBlock>
        </PaneContainer>

      </Pane>
    );
  }
}
