import React, {Component} from 'react'

import {connect} from 'react-redux'
import {loadTopicPage} from '../core/actions'

class TopicsPage extends Component {
  componentWillMount() {
    this._load()
  }

  _load() {
    const hash = 'QmPhxT9nZALsqWsn14AgkBichHQHXU73SAQx5FP8F6RfT9'
    const url = 'topic/list/02-khoa-hoc-va-niem-tin'
    this.props.loadTopicPage(hash, url)
  }

  render() {
    return <div>Hello</div>
  }
}

const mapStateToProps = state => {
  const {
    entities: {topics},
    ipfs,
  } = state

  return {
    topics,
    ipfs,
  }
}

const mapDispatchToProps = {loadTopicPage}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicsPage)
