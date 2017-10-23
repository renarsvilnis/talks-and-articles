import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import moment from 'moment';

import MarkdownEditor from 'components/MarkdownEditor';

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

  formatDate (epoch) {
    return moment(epoch).format('MMMM D, YYYY, HH:MM');
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
            {this.state.filteredRecords.map((record) => (
              <div key={record.id}>
                <div title={record.href}><a href={record.href} target="_blank">{record.title}</a></div>
                <div>{`Tags: ${record.tags.join(', ')}`}</div>
                <div>{`Type: ${record.type}`}</div>
                <div>{`Created: ${this.formatDate(record.addedAt)}`}</div>
                <div>{`Modified: ${record.editedAt ? this.formatDate(record.editedAt) : 'Never'}`}</div>
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
