import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, filter, pluck } from 'rxjs/operators';
import { enCampo, CriterioBusqueda } from './lanzamientos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getLaunches$ = (): Observable<any[]> => {
    return this.http.get('http://localhost:4200/assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches.map(launch => ({ name: launch.name })),
        ));
  }

  public getLaunchesFiltered$ = (criterio: CriterioBusqueda): Observable<any[]> => {

    if (!criterio.campo || !criterio.valor) {
      return this.getLaunches$();
    }
    switch (criterio.campo) {
      case enCampo.mision:
        return this.http.get('http://localhost:4200/assets/launchlibrary.json')
          .pipe(
            map(
              (res: any) => res.launches.filter(
                launch => launch.missions && launch.missions.some(elem => elem.id === criterio.valor)
              ).map(launch => ({ name: launch.name })),
            )
          );
      case enCampo.agencia:
        return this.http.get('http://localhost:4200/assets/launchlibrary.json')
          .pipe(
            map(
              (res: any) => res.launches.filter(
                launch => launch.rocket && launch.rocket.agencies && launch.rocket.agencies.some(elem => elem.id === criterio.valor)
              ).map(launch => ({ name: launch.name })),
            )
          );
      case enCampo.estado:
        return this.http.get('http://localhost:4200/assets/launchlibrary.json')
          .pipe(
            map(
              (res: any) => res.launches.filter(
                launch => launch.status === criterio.valor
              ).map(launch => ({ name: launch.name })),
            )
          );
    }
  }

  public getData$ = (campo: enCampo): Observable<any[]> => {

    let url = '';
    let tipo = 'types';
    switch (campo) {
      case enCampo.mision:
        url = 'http://localhost:4200/assets/launchmissions.json';
        break;
      case enCampo.agencia:
        url = 'http://localhost:4200/assets/launchagencies.json';
        tipo = 'agencies';
        break;
      case enCampo.estado:
        url = 'http://localhost:4200/assets/launchstatus.json';
        break;
      default:
        return of([]);
    }

    return this.http.get(url)
      .pipe(
        map((res: any) => res[tipo])
      );

  }
}
