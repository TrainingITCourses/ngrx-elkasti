import { Action } from '@ngrx/store';
import { CriterioActionTypes, CriterioActions } from './criterio.actions';

export interface State {
  lista?: any[];
}

export const initialState: State = {
  lista: [],
};

export function reducer(state = initialState, action: CriterioActions): State {
  switch (action.type) {
    case CriterioActionTypes.CambiarCriterio:
      return state;
    case CriterioActionTypes.CambiadoCriterio:
      return { lista: action.payload };
    default:
      return state;
  }
}
