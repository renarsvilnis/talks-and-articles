import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import highlight from 'highlight.js';

function getRecords () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require('../../records/2017.json'));
    }, 350);
  });
}

/**
 * @reference http://fusejs.io/
 */
const fuseOptions = {
  // id: 'itemId',
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'href',
    'title',
    'tags',
    'type'
    // 'comments'
  ]
};

// import './Root.scss';

export default class Root extends PureComponent {
  static propTypes = {

  };

  // ###########################################################################
  // Lifecycle
  // ###########################################################################

  constructor (props) {
    super(props);

    this.fuse = null;

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onMarkdownChange = this.onMarkdownChange.bind(this);

    this.state = {
      loaded: false,
      records: [],
      filteredRecords: [],
      markdown: ''
    };
  }

  async componentDidMount () {
    const records = await getRecords();

    this.fuse = new Fuse(records, fuseOptions);

    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      records,
      filteredRecords: records,
      loaded: true
    });
  }

  // ###########################################################################
  // Helpers
  // ###########################################################################

  filterRecords (searchStr) {
    // const keywords = keywordList.join(',');

    return searchStr === '' || searchStr == null
      ? this.state.records
      : this.fuse.search(searchStr);
  }

  createMarkdown (markdownStr) {
    // // Async highlighting with pygmentize-bundled
    // marked.setOptions({
    //   highlight: function (code, lang, callback) {
    //     require('pygmentize-bundled')({lang: lang, format: 'html'}, code, function (err, result) {
    //       callback(err, result.toString());
    //     });
    //   }
    // });

    // Using async version of marked
    // marked(markdownStr, function (err, content) {
    //   if (err) throw err;
    //   console.log(content);
    // });

    // Synchronous highlighting with highlight.js
    // marked.setOptions({
    //   highlight: function (code) {
    //     return require('highlight.js').highlightAuto(code).value;
    //   }
    // });

    // Synchronous highlighting with highlight.js
    marked.setOptions({
      highlight: (code) => highlight.highlightAuto(code).value
    });

    return marked(markdownStr);
  }

  // ###########################################################################
  // Event handlers
  // ###########################################################################

  onSearchChange (ev) {
    // if (!this.state.loaded) {
    //   return;
    // }

    console.log(this);

    this.setState({
      filteredRecords: this.filterRecords(ev.target.value)
    });
  }

  onMarkdownChange (ev) {
    this.setState({
      markdown: this.createMarkdown(ev.target.value)
    });
  }

  // ###########################################################################
  // Render
  // ###########################################################################

  renderMarkdownEditor () {
    /* eslint-disable react/no-danger, react/jsx-no-bind */
    return (
      <div>
        <textarea onChange={this.onMarkdownChange} />
        {/* <div dangerouslySetInnerHTML={{__html: this.state.markdown}} /> */}
        <ReactMarkdown source={this.state.markdown} />
        <hr />
      </div>
    );
    /* eslint-enable react/no-danger, react/jsx-no-bind */
  }

  render () {
    return (
      <div>

        {this.renderMarkdownEditor()}

        <input
          type="text"
          placeholder="Search.."
          onChange={this.onSearchChange}
        />
        <hr />

        {this.state.filteredRecords && (
          <div>
            {this.state.filteredRecords.map((record) => (
              <div key={record.id}>
                <div title={record.href}><a href={record.href} target="_blank">{record.title}</a></div>
                <div>{`Tags: ${record.tags.join(', ')}`}</div>
                <div>{`Type: ${record.type}`}</div>
                <div>{`Added at: ${new Date(record.addedAt)}`}</div>
                {/* <div>{`Edited at: ${new Date(record.editedAt)}`}</div> */}
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
