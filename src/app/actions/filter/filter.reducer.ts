import { Filter } from "./filter.model";
import {
  CurrentFilterActions,
  CurrentFilterActionTypes,
} from "./filter.actions";

export const initialState: string = "SHOW_ALL";

export function reducer(
  state = initialState,
  action: CurrentFilterActions
): string {
  switch (action.type) {
    case "[Filter] Set current filter":
      return action.payload.filter;
    default:
      return state;
  }
}
