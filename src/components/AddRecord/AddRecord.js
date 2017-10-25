import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

// import {parseYoutubeLink, parseVimeoLink, parseUnknownLink} from './helpers/parseLink';
import {parseUnknownLink} from './helpers/parseLink';

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
      tags: []
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
      let linkObj;

      // linkObj = await parseYoutubeLink(link);
      //
      // if (!linkObj) {
      //   linkObj = await parseVimeoLink(link);
      // }

      if (!linkObj) {
        linkObj = await parseUnknownLink(link);
      }

      console.log(linkObj);

      if (linkObj) {
        this.setState({
          href: 'test'
        });
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
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          name="href"
          placeholder="Link"
          onChange={this.handleHrefInputChange}
          value={this.state.href}
          // required
        />
        <input
          name="title"
          placeholder="Title"
          onChange={this.handleInputChange}
          value={this.state.title}
          // required
        />
        <select
          name="type"
          onChange={this.handleInputChange}
          value={this.state.type}
        >
          <option value="article">{'Article'}</option>
          <option value="video">{'Video'}</option>
        </select>

        <input
          type="submit"
          value="Add record"
        />
      </form>
    );
  }
}
