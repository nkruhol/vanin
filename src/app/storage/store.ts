import { RouterState } from "@angular/router";
import { AppState } from "./app/app.state";
import { ParticipantsState } from "./particaipants/participants.state";

export interface IStore {
  router: RouterState,
  app: AppState,
  participants: ParticipantsState,
}
