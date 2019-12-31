import React from 'react';
import { connect } from 'react-redux';

import { countUp } from '../actions';
import AppComp from '../App';

const mapStateToProps = state => {
  return ({
    count: state.count
  })
}

const mapDispatchToProps = (dispatch) => ({
  countUp: () => dispatch(countUp())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComp)

