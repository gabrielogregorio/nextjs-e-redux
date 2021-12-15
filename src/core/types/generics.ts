export enum stateLoadingEnum {
  'ERROR' = 'ERROR',
  'LOADING' = 'LOADING',
  'IDLE' = 'IDLE'
}
export interface NormalizedData<T> {
  [uuid: string]: T;
}
