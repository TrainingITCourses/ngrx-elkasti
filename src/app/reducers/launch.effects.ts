import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchActionTypes, Loaded, Filtrar, Filtrado } from './launch.actions';
import { mergeMap, map  } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Injectable()
export class LaunchEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(LaunchActionTypes.LoadLaunchs)
    .pipe(
      mergeMap(() =>
        this.api
          .getLaunches$()
          .pipe(
            map(launches => new Loaded(launches))
          )
      )
    );

  @Effect()
  public filtrar$ = this.actions$
    .ofType(LaunchActionTypes.Filtrar)
    .pipe(
      mergeMap((action: Filtrar) =>
        this.api
          .getLaunchesFiltered$(action.payload)
          .pipe(
            map(launches => new Filtrado(launches))
          )
      )
    );


  // @Effect()
  // public filtrar$ = this.actions$
  //   .ofType(LaunchActionTypes.Filtrar)
  //   .pipe(
  //     mergeMap((action: Filtrar) =>
  //       this.store.select(s => s.launch.launches)
  //         .pipe(
  //           filter(
  //             launch => launch['status'] === action.payload.valor
  //           ),
  //           map(launches => new Filtrado(launches))
  //         )
  //     )
  //   );


  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store: Store<State>
  ) { }
}
