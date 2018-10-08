import { Action } from '@ngrx/store';
import { LaunchActionTypes, LaunchActions } from './launch.actions';


export interface State {
    launches: any[];

}

export const initialState: State = {
    launches: [],
};

export function reducer(state = initialState, action: LaunchActions): State {
    switch (action.type) {
        case LaunchActionTypes.LoadLaunchs:
            return state;
        case LaunchActionTypes.Loaded:
            return { launches: action.payload };
        case LaunchActionTypes.Filtrar:
            return state;
        case LaunchActionTypes.Filtrado:
            return { launches: action.payload };
        default:
            return state;
    }
}
