import React from 'react';
import { connect } from 'react-redux';
import { filter } from './actions';
import Filter from '../../components/Filter';


const mapStateToProps = state => state.routing.locationBeforeTransitions.query;

const mapDispatchToProps = dispatch => ({
    onFilterChange: (name, value) => dispatch(filter({ name, value }))
});
   
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);