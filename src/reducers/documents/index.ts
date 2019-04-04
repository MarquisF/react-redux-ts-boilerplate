import { SetNameAction, SetListAction } from 'actions/documents';
import ActionTypeKeys from 'actions/ActionTypeKeys';

export interface DocumentsState {
  name: string;
  list: Array<any>;
}

const initialState: DocumentsState = {
  name: 'Home',
  list: []
};

export const stateKey = 'documents';

export const actions = {
  setName: (name: string): SetNameAction => ({
    type: ActionTypeKeys.DOCUMENTS_CHANGE_NAME,
    payload: { name }
  }),

  setList: (list: Array<any>): SetListAction => ({
    type: ActionTypeKeys.DOCUMENTS_CHANGE_LIST,
    payload: { list }
  })
};

export const reducerFunctions = {
  [ActionTypeKeys.DOCUMENTS_CHANGE_NAME](
    state: DocumentsState,
    action: SetNameAction
  ) {
    return { ...state, name: action.payload.name };
  },

  [ActionTypeKeys.DOCUMENTS_CHANGE_LIST](
    state: DocumentsState,
    action: SetListAction
  ) {
    return { ...state, name: action.payload.list };
  }
};

export default {
  stateKey,
  initialState,
  reducerFunctions
};
