import {
  Snitch as _Snitch,
  snitchMiddleware,
  snitchReducer,
  connectWrapper as snitchConnect
} from "@faizaanceg/snitch";
import {
  SideEffect as _SideEffect,
  sideEffectMiddleware,
  sideEffectReducer,
  connectWrapper as sideEffectConnect
} from "@faizaanceg/redux-side-effect";

let modalKey = "modals";
let sideEffectKey = "apiStatus";

export let Snitch = snitchConnect(_Snitch, modalKey);
export let SideEffect = sideEffectConnect(_SideEffect, sideEffectKey);

export let ephemeralMiddlewares = [sideEffectMiddleware(sideEffectKey), snitchMiddleware(modalKey)];

export let ephemeralReducers = {
  [sideEffectKey]: sideEffectReducer,
  [modalKey]: snitchReducer
};
