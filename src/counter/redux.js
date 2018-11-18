let actions = {
  SET_VALUE: "[Set value]"
};

export let setValue = value => ({
  type: actions.SET_VALUE,
  value
});

let initialState = {
  value: 0
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_VALUE: {
      return {
        ...state,
        value: state.value + action.value
      };
    }
    default:
      return state;
  }
}
