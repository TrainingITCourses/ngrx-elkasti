import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../api.service';
import { CriterioActionTypes, CambiarCriterio, CambiadoCriterio } from './criterio.actions';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class CriterioEffects {


  @Effect()
  public cambiarCriterio$ = this.actions$
    .ofType(CriterioActionTypes.CambiarCriterio)
    .pipe(
      mergeMap((action: CambiarCriterio) =>
        this.api
          .getData$(action.payload.campo)
          .pipe(
            map(lista => new CambiadoCriterio(lista))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) { }
}
