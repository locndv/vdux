import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playerLoadItem, playerLoadPlaylist } from '@a7/vdux';

class PlayerPage extends Component {
  componentDidMount() {
    const itemUrl =
      '02-khoa-hoc-va-niem-tin.01-su-khoi-dau.1-tien-hoa-hay-sang-tao-deu-la-ton-giao';
    const hash = `QmaA74A4vTac23VKbRqBoV9f53LvUEFZqha5CVWydRwoKp`;
    this.props.playerLoadItem(hash, itemUrl);
  }

  render() {
    const { player } = this.props;
    return (
      <div>
        <h1>{player.item.name}</h1>
        <video controls />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { player } = state;
  return { player };
};

const mapDispatchToProps = {
  playerLoadItem,
  playerLoadPlaylist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage);
