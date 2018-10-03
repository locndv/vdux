import { connect } from 'react-redux';
import { loadTopicPage } from '../actions';

export default (mapStateExtends, mapDispatchExtends) => PageComponent => {
  const mapStateToProps = state => {
    const extendsState = mapStateExtends ? mapStateExtends(state) : {};
    const {
      ipfs,
      entities: { topic }
    } = state;
    return { ipfs, topic, ...extendsState };
  };

  const mapDispatchToProps = { loadTopicPage, ...mapDispatchExtends };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageComponent);
};
