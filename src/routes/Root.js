import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import Fuse from 'fuse.js';

import MarkdownEditor from 'components/MarkdownEditor';
import Record from 'components/Record';

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

    this.state = {
      loaded: false,
      records: [],
      filteredRecords: []
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

  // ###########################################################################
  // Event handlers
  // ###########################################################################

  onSearchChange (ev) {
    if (!this.state.loaded) {
      return;
    }

    this.setState({
      filteredRecords: this.filterRecords(ev.target.value)
    });
  }

  // ###########################################################################
  // Render
  // ###########################################################################

  render () {
    return (
      <div>

        <MarkdownEditor />

        <input
          type="text"
          placeholder="Search.."
          onChange={this.onSearchChange}
        />
        <hr />

        {this.state.filteredRecords && (
          <div>
            {this.state.filteredRecords.map((record) => (<Record key={record.id} {...record} />))}
          </div>
        )}
      </div>
    );
  }
}
