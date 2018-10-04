import { connect } from 'react-redux';
import { playerLoadItem, playerLoadPlaylist } from '../actions/player';

export default (mapStateExtends, mapDispatchExtends) => PlayerComponent => {
  const mapStateToProps = state => {
    const extendsState = mapStateExtends ? mapStateExtends(state) : {};
    const {
      player: { item, topic, playlist, isPlaying }
    } = state;
    return { item, topic, playlist, isPlaying, ...extendsState };
  };

  const mapDispatchToProps = {
    playerLoadItem,
    playerLoadPlaylist,
    ...mapDispatchExtends
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlayerComponent);
};
