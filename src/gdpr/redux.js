export const actionTypes = {
  GET_GDPR_STATUS: "[GDPR] Status",
  GET_GDPR_STATUS_SUCCESS: "[GDPR] Status Success",
  GET_GDPR_STATUS_FAILURE: "[GDPR] Status Failure",

  ACCEPT_GDPR: "[GDPR] Accept",
  ACCEPT_GDPR_SUCCESS: "[GDPR] Accept Success",
  ACCEPT_GDPR_FAILURE: "[GDPR] Accept Failure",

  REJECT_GDPR: "[GDPR] Reject",
  REJECT_GDPR_SUCCESS: "[GDPR] Reject Success",
  REJECT_GDPR_FAILURE: "[GDPR] Reject Failure"
};

let sleep = timeout => new Promise((res, rej) => setTimeout(res, timeout));

export const actions = {
  getGDPRStatus: () => async dispatch => {
    dispatch({
      type: actionTypes.GET_GDPR_STATUS
    });
    try {
      await sleep(1300);
      dispatch({
        type: actionTypes.GET_GDPR_STATUS_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_GDPR_STATUS_FAILURE,
        error
      });
    }
  },

  acceptGDPR: () => async dispatch => {
    dispatch({
      type: actionTypes.ACCEPT_GDPR
    });
    try {
      await sleep(2500);
      dispatch({
        type: actionTypes.ACCEPT_GDPR_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ACCEPT_GDPR_FAILURE
      });
    }
  },
  rejectGDPR: () => async dispatch => {
    dispatch({
      type: actionTypes.REJECT_GDPR
    });
    try {
      await sleep(2500);
      throw new Error("Oops! Something went wrong!");
      dispatch({
        type: actionTypes.REJECT_GDPR_SUCCESS
      });
    } catch (error) {
      dispatch({
        type: actionTypes.REJECT_GDPR_FAILURE,
        error
      });
    }
  }
};

const initialState = {
  isOpen: false,
  accept: {
    isFetching: false,
    errors: null
  },
  reject: {
    isFetching: false,
    errors: null
  }
};

export let gdprReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GDPR_STATUS: {
      return {
        ...state,
        isOpen: false
      }
    }
    case actionTypes.GET_GDPR_STATUS_SUCCESS: {
      return {
        ...state,
        isOpen: true
      }
    }
    case actionTypes.ACCEPT_GDPR: {
      return {
        ...state,
        accept: {
          ...state.accept,
          isFetching: true,
          errors: null
        }
      }
    }
    case actionTypes.ACCEPT_GDPR_SUCCESS: {
      return {
        ...state,
        accept: {
          ...state.accept,
          isFetching: false
        },
        isOpen: false
      }
    }
    case actionTypes.ACCEPT_GDPR_FAILURE: {
      return {
        ...state,
        accept: {
          ...state.accept,
          isFetching: false,
          errors: action.error
        }
      }
    }
    case actionTypes.REJECT_GDPR: {
      return {
        ...state,
        reject: {
          ...state.reject,
          isFetching: true,
          errors: null
        }
      }
    }
    case actionTypes.REJECT_GDPR_SUCCESS: {
      return {
        ...state,
        reject: {
          ...state.reject,
          isFetching: false
        },
        isOpen: false
      }
    }
    case actionTypes.REJECT_GDPR_FAILURE: {
      return {
        ...state,
        reject: {
          ...state.reject,
          isFetching: false,
          errors: action.error
        }
      }
    }

    default:
      return state;
  }
}