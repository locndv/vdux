import { connect } from 'react-redux';
import { loadItemPage } from '../actions';

export default (mapStateExtends, mapDispatchExtends) => PageComponent => {
  const mapStateToProps = state => {
    const extendsState = mapStateExtends ? mapStateExtends(state) : {};
    const {
      ipfs,
      entities: { item }
    } = state;
    return { ipfs, item, ...extendsState };
  };

  const mapDispatchToProps = { loadItemPage, ...mapDispatchExtends };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(PageComponent);
};
