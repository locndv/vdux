import React, { Component } from 'react';

import { withTopic } from '@a7/vdux';

class TopicsPage extends Component {
  componentWillMount() {
    this._load();
  }

  _load() {
    const hash = 'QmPhxT9nZALsqWsn14AgkBichHQHXU73SAQx5FP8F6RfT9';
    const url = 'topic/list/02-khoa-hoc-va-niem-tin';
    this.props.loadTopicPage(hash, url);
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.topic, null, 2)}</pre>
      </div>
    );
  }
}

export default withTopic()(TopicsPage);
