import { Action } from '@ngrx/store';
import { CriterioBusqueda } from '../lanzamientos';

export enum CriterioActionTypes {
  CambiarCriterio = '[Criterio] Cambiar criterio',
  CambiadoCriterio = '[Criterio] Cambiado criterio',
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
