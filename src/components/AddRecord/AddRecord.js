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

    if (link) {
      this.parseHrefTimeout = setTimeout(async () => {
        this.setState({parsingLink: true});
        const linkObj = await parseLink(link);

        this.parseHrefTimeout = null;

        if (linkObj) {
          this.setState({parsingLink: false, ...linkObj});
        }
      }, 200);
    }
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
    const disableNonHrefInputs = !this.state.href || this.state.parsingLink;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label htmlFor="href" required>{'Link: '}</label>
          <input
            name="href"
            placeholder="Link"
            onChange={this.handleHrefInputChange}
            value={this.state.href}
            required
            disabled={this.state.parsingLink}
          />
        </fieldset>

        {this.state.parsingLink && (<div>{'Parsing..'}</div>)}

        <fieldset>
          <label htmlFor="href" required>{'Title: '}</label>
          <input
            name="title"
            placeholder="Title"
            onChange={this.handleInputChange}
            value={this.state.title}
            disabled={disableNonHrefInputs}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="href" required>{'Type: '}</label>
          <select
            name="type"
            onChange={this.handleInputChange}
            value={this.state.type}
            disabled={disableNonHrefInputs}
            required
          >
            <option value="article">{'Article'}</option>
            <option value="video">{'Video'}</option>
          </select>
        </fieldset>

        <input
          type="submit"
          value="Add record"
          disabled={disableNonHrefInputs}
        />
      </form>
    );
  }
}
