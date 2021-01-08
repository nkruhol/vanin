import { createAction, props } from "@ngrx/store"
import { AppState } from "./app.state";

export const ExtendStateAction = createAction(
  "[App] Extend State",
  props<{ newState: Partial<AppState> }>(),
);
