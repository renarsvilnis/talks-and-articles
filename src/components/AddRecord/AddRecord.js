import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

import {parseLink} from 'api/backend';

export default class AddRecord extends PureComponent {
  static propTypes = {
    existingTags: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    existingTags: []
  };

  // href: record.href,
  // title: record.title,
  // addedAt: record.addedAt,
  // tags: record.tags,
  // type: record.type,
  // comments

  constructor (props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleHrefInputChange = this.handleHrefInputChange.bind(this);

    this.state = {
      href: '',
      title: '',
      type: 'video',
      tags: [],

      parsingLink: false
    };
  }

  handleHrefInputChange (ev) {
    const link = ev.target.value;

    if (this.parseHrefTimeout) {
      clearTimeout(this.parseHrefTimeout);
    }

    this.setState({
      href: link
    });

    this.parseHrefTimeout = setTimeout(async () => {
      this.setState({parsingLink: true});
      const linkObj = await parseLink(link);

      this.parseHrefTimeout = null;

      if (linkObj) {
        this.setState({parsingLink: false, ...linkObj});
      }
    }, 200);
  }

  handleInputChange (ev) {
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'href') {

    }

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit (ev) {
    ev.preventDefault();

    console.log('TODO handleFormSubmit');
  }

  render () {
    const disableNonHrefInputs = !this.state.title || this.state.parsingLink;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          name="href"
          placeholder="Link"
          onChange={this.handleHrefInputChange}
          value={this.state.href}
          // required
        />
        {this.state.parsingLink && (<div>{'Parsing..'}</div>)}
        <input
          name="title"
          placeholder="Title"
          onChange={this.handleInputChange}
          value={this.state.title}
          disabled={disableNonHrefInputs}
          // required
        />
        <select
          name="type"
          onChange={this.handleInputChange}
          value={this.state.type}
          disabled={disableNonHrefInputs}
        >
          <option value="article">{'Article'}</option>
          <option value="video">{'Video'}</option>
        </select>

        <input
          type="submit"
          value="Add record"
          disabled={disableNonHrefInputs}
        />
      </form>
    );
  }
}
