import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function formatDate (epoch) {
  return moment(epoch).format('MMMM D, YYYY, HH:MM');
}

export default class Record extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string.isRequired,
    addedAt: PropTypes.number.isRequired,
    editedAt: PropTypes.number
  };

  render () {
    return (
      <div>
        <div title={this.props.href}><a href={this.props.href} target="_blank">{this.props.title}</a></div>
        <div>{`Tags: ${this.props.tags.join(', ')}`}</div>
        <div>{`Type: ${this.props.type}`}</div>
        <div>{`Created: ${formatDate(this.props.addedAt)}`}</div>
        <div>{`Modified: ${this.props.editedAt ? formatDate(this.props.editedAt) : 'Never'}`}</div>
        {/* <div>{`Edited at: ${new Date(record.editedAt)}`}</div> */}
        <hr />
      </div>
    );
  }
}
