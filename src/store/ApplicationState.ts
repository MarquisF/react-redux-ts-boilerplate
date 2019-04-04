import { DocumentsState } from 'reducers/documents';

export default interface ApplicationState {
  documents: DocumentsState;
}

// type CompositionState = DocumentsState | AuthState | ...;
export type CompositionState = DocumentsState;
