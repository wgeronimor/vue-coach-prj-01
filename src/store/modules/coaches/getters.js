export default {
  coaches(state) {
      return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches.length > 0;
  } 
};