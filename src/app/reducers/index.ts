import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch.reducer';
import * as fromCriterio from './criterio.reducer';

export interface State {

  launch: fromLaunch.State;
  criterio: fromCriterio.State;
}

export const reducers: ActionReducerMap<State> = {

  launch: fromLaunch.reducer,
  criterio: fromCriterio.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
