import { RouterState } from "@angular/router";
import { AppState } from "./app/app.state";

export interface IStore {
  router: RouterState,
  app: AppState,
}
