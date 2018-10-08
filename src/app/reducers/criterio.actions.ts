import { Action } from '@ngrx/store';
import { CriterioBusqueda } from '../lanzamientos';

export enum CriterioActionTypes {
  CambiarCriterio = '[Launch] Cambiar criterio',
  CambiadoCriterio = '[Launch] Cambiado criterio',
}

export class CambiarCriterio implements Action {
  readonly type = CriterioActionTypes.CambiarCriterio;
  constructor(readonly payload: CriterioBusqueda) { }
}

export class CambiadoCriterio implements Action {
  readonly type = CriterioActionTypes.CambiadoCriterio;
  constructor(readonly payload: any[]) { }
}

export type CriterioActions = CambiarCriterio | CambiadoCriterio;
