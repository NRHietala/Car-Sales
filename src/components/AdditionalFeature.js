import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/carActions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=> {
        props.addFeature(props.feature.id);
        console.log(props.feature.id);
      }} 
      className="button"
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.addFeature,
  };
};

export default connect (mapStateToProps, {addFeature})(AdditionalFeature);
