
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const INCREASE_TOTAL = "INCREASE_TOTAL";
export const DECREASE_TOTAL = "DECREASE_TOTAL";

export const addFeature = featureId => {
  return { type: ADD_FEATURE, payload: featureId }
};

// export const removeFeature = featureId => {
//   return { type: REMOVE_FEATURE, }
// };

// export const increaseTotal = total => {
//   return { type: INCREASE_TOTAL, }
// };

// export const decreaseTotal = total => {
//   return { type: DECREASE_TOTAL, }
// };