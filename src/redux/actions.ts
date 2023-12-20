export enum ActionTypes {
  CREATE_PRODUCT = 'CREATE_PRODUCT',
  CHANGE_FORM = 'CHANGE_FORM',
}

export type ActionType = {
  type: ActionTypes;
  payload: { name: string; value: string | number };
};
