import React from 'react';
import { connect } from 'react-redux';

import { getTime } from '../actions';
import TimeComp from '../Time';

const mapStateToProps = state => {
  return ({
    time: state.time
  })
}

const mapDispatchToProps = (dispatch) => ({
  getTime: () => dispatch(getTime())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeComp)

