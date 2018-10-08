import { Action } from '@ngrx/store';
import { CriterioBusqueda } from '../lanzamientos';

export enum LaunchActionTypes {
  LoadLaunchs = '[Launch] Load Launchs',
  Loaded = '[Launch] Loaded Launchs',
  Filtrar = '[Launch] Filtrar',
  Filtrado = '[Launch] Filtrado'
}

export class LoadLaunchs implements Action {
  readonly type = LaunchActionTypes.LoadLaunchs;
}

export class Loaded implements Action {
  readonly type = LaunchActionTypes.Loaded;
  constructor(readonly payload: any[]) { }
}

export class Filtrar implements Action {
  readonly type = LaunchActionTypes.Filtrar;
  constructor(readonly payload: CriterioBusqueda) { }
}

export class Filtrado implements Action {
  readonly type = LaunchActionTypes.Filtrado;
  constructor(readonly payload: any[]) { }
}

export type LaunchActions =
  LoadLaunchs | Loaded |  Filtrar | Filtrado;
