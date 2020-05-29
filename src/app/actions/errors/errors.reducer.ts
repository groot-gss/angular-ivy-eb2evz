import { ErrorsActions, ErrorsActionTypes } from "./errors.actions";

export const initialState: Array<any> = [];

export const reducer = (state = initialState, action: ErrorsActions) => {
  switch (action.type) {
    case ErrorsActionTypes.SetError:
      return state.concat(action.payload.error);
    default:
      return state;
  }
};
