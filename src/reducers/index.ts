import { combineReducers } from 'redux';
import ActionTypes from 'actions/ActionTypes';

import documents from './documents';
import { CompositionState } from 'store/ApplicationState';

interface ReducerItem {
  stateKey: string;
  initialState: CompositionState;
  reducerFunctions: any;
}

interface CompositionReducer {
  (state: CompositionState, action: ActionTypes): CompositionState;
}

interface Reducers {
  [index: string]: CompositionReducer;
}

const reducerList = [documents];

const reducers: Reducers = {};
reducerList.forEach((reducerItem: ReducerItem) => {
  const { stateKey, initialState, reducerFunctions } = reducerItem;

  reducers[stateKey] = (
    state: CompositionState = initialState,
    action: ActionTypes
  ): CompositionState => {
    if (reducerFunctions.hasOwnProperty(action.type)) {
      return reducerFunctions[action.type](state, action);
    } else {
      return state;
    }
  };
});

const rootReducer = combineReducers(reducers);

export default rootReducer;
