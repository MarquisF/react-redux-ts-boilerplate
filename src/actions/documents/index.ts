import keys from 'actions/ActionTypeKeys';

export interface SetNameAction {
  type: keys.DOCUMENTS_CHANGE_NAME;
  payload: {
    name: string;
  };
}

export interface SetListAction {
  type: keys.DOCUMENTS_CHANGE_LIST;
  payload: {
    list: Array<any>;
  };
}

export type ActionTypes = SetNameAction | SetListAction;
