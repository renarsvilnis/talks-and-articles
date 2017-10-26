import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const TabsContainer = glamorous.div({
  display: 'flex',
  width: '100%',
  flexDirection: 'column'
});

const TabLabels = glamorous.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
});

const TabLabel = glamorous.div({
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

const TabBlockContainer = glamorous.div({
  display: 'flex',
  width: '100%'
});

const Tab = glamorous.div({
  flex: '100% 1 0'
}, ({active = false}) => ({
  display: active ? 'block' : 'none'
}));

export default class Tabs extends React.Component {
  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.any).isRequired,
    tabs: PropTypes.arrayOf(PropTypes.any).isRequired,
    renderInvisibleTabs: PropTypes.bool
  }

  constructor (props) {
    super(props);

    this.state = {
      activeTab: 0
    };

    this.onLabelClick = this.onLabelClick.bind(this);
  }

  onLabelClick (ev) {
    console.log(ev.target, ev.target.dataset.index);
    const tabIndex = ev.target.dataset.index;
    this.setState({activeTab: parseInt(tabIndex, 10)});
  }

  render () {
    let tabs;

    if (this.props.renderInvisibleTabs) {
      tabs = this.props.tabs.map((tab, i) => (<Tab key={i} active={this.state.activeTab === i}>{tab}</Tab>));
    } else {
      tabs = (<Tab key={this.state.activeTab} active>{this.props.tabs[this.state.activeTab]}</Tab>);
    }

    return (
      <TabsContainer>
        <TabLabels>
          {this.props.labels.map((label, i) => (
            <TabLabel
              key={i}
              data-index={i}
              active={this.state.activeTab === i}
              onClick={this.onLabelClick}
            >
              {label}
            </TabLabel>
          ))}
        </TabLabels>
        <TabBlockContainer>
          {tabs}
        </TabBlockContainer>

      </TabsContainer>
    );
  }
}
