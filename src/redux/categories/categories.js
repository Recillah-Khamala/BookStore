export const { checkStatus } = categories.actions;

initialState = [];

const checkReducers = (state = initialState, action) => {
  switch (action.type) {
    case checkStatus:
      return 'under construction';
    default:
      return state;
  }
};
