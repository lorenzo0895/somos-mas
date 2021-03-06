import { createSelector } from "@ngrx/store";
import {ActivityState} from "src/app/shared/models/Activity";
import { AppState } from "../app.state";

export const selectActivities = (state: AppState) => state.activities;

export const selectListActivities = createSelector(
  selectActivities,
  (state: ActivityState) => state.activities
);

export const selectLoading = createSelector(
  selectActivities,
  (state: ActivityState) => state.loading
);

export const selectListActivity = createSelector(
  selectActivities,
  (state: ActivityState) => state.activity
);

